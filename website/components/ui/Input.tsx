'use client';

interface InputProps {
  label?: string;
  placeholder?: string;
  type?: 'text' | 'email' | 'tel' | 'textarea';
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
  required?: boolean;
  name?: string;
  className?: string;
}

export function Input({
  label,
  placeholder,
  type = 'text',
  value,
  onChange,
  error,
  required,
  name,
  className = '',
}: InputProps) {
  const baseClasses = `w-full px-4 py-3 rounded-xl border bg-white text-[#1A1A2E] placeholder-[#9CA3AF] outline-none transition-all duration-200 focus:border-[#00C4CC] focus:ring-2 focus:ring-[#00C4CC]/20 ${error ? 'border-red-400' : 'border-[#E5E7EB]'}`;

  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {label && (
        <label className="text-sm font-medium text-[#374151]">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      {type === 'textarea' ? (
        <textarea
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          required={required}
          rows={5}
          className={`${baseClasses} resize-none`}
        />
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          required={required}
          className={baseClasses}
        />
      )}
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}
