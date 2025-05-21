import { JSX } from 'solid-js';
import { EmojiPickerIcon } from '@/components/icons/EmojiPickerIcon';

type EmojiPickerButtonProps = {
  buttonColor?: string;
  isDisabled?: boolean;
  isLoading?: boolean;
  disableIcon?: boolean;
} & JSX.ButtonHTMLAttributes<HTMLButtonElement>;

export const EmojiPickerButton = (props: EmojiPickerButtonProps) => {
  return (
    <button
      type="button"
      disabled={props.isDisabled || props.isLoading}
      {...props}
      class={
        'py-2 pr-2 justify-center font-semibold focus:outline-none flex items-center disabled:opacity-50 disabled:cursor-not-allowed disabled:brightness-100 transition-all filter hover:brightness-90 active:brightness-75 chatbot-button ' +
        props.class
      }
      style={{ background: 'transparent', border: 'none' }}
    >
      <EmojiPickerIcon color={props.buttonColor} />
    </button>
  );
};
