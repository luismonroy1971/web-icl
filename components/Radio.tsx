import { useRef, MouseEvent, InputHTMLAttributes } from 'react';

interface RadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
}

const RadioButton: React.FC<RadioButtonProps> = ({ id, label, ...props }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleButtonClick = (event: MouseEvent) => {
    event.stopPropagation();

    if (inputRef.current) {
      const newEvent = new Event('input', { bubbles: true });
      inputRef.current.dispatchEvent(newEvent);
    }
  };

  return (
    <div className="flex items-center hover:bg-gray-200 p-2 rounded">
      <div className="radio-button mr-2" onClick={handleButtonClick}>
        <input type="radio" id={id} ref={inputRef} {...props} />
        <div className="radio-inner"></div>
      </div>
      <label htmlFor={id} className="cursor-pointer font-medium text-gray-700">
        {label}
      </label>
    </div>
  );
};

export default RadioButton;
