import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api/client";
import styles from "./SearchBox.module.css";

interface SearchBoxProps {
  placeholder?: string;
  className?: string;
}

export default function SearchBox({ placeholder = "Tìm sản phẩm...", className }: SearchBoxProps) {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // Debounce cho suggestions
  useEffect(() => {
    if (query.length < 1) {
      setSuggestions([]);
      setShowSuggestions(false);
      setError(null);
      return;
    }

    const timer = setTimeout(async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await api.searchSuggestions(query);
        setSuggestions(res.suggestions || []);
        setShowSuggestions(true);
      } catch (error) {
        console.error("Suggestions error:", error);
        setSuggestions([]);
        setError(error instanceof Error ? error.message : "Lỗi tìm kiếm");
      } finally {
        setLoading(false);
      }
    }, 200); // Debounce 200ms - nhanh hơn để liền tay

    return () => clearTimeout(timer);
  }, [query]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
    setError(null);
    navigate(`/search?q=${encodeURIComponent(suggestion)}`);
    setShowSuggestions(false);
    inputRef.current?.blur();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleFocus = () => {
    if (query.length > 0) {
      setShowSuggestions(true);
    }
  };

  const handleBlur = () => {
    // Delay để cho click suggestion hoạt động
    setTimeout(() => setShowSuggestions(false), 200);
  };

  return (
    <div className={`${styles.searchBox} ${className || ""}`}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={handleInputChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeholder}
          className={styles.input}
          autoComplete="off"
        />
        <button type="submit" className={styles.button}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
          </svg>
        </button>
      </form>

      {showSuggestions && (
        <div className={styles.suggestions}>
          {error ? (
            <div className={styles.loading} style={{ color: "#dc3545" }}>{error}</div>
          ) : suggestions.length > 0 ? (
            suggestions.map((suggestion, index) => (
              <div
                key={index}
                className={styles.suggestion}
                onClick={() => handleSuggestionClick(suggestion)}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.35-4.35"></path>
                </svg>
                <span>{suggestion}</span>
              </div>
            ))
          ) : loading ? (
            <div className={styles.loading}>Đang tìm...</div>
          ) : query.length > 0 ? (
            <div className={styles.loading}>Không tìm thấy kết quả</div>
          ) : null}
        </div>
      )}
    </div>
  );
}