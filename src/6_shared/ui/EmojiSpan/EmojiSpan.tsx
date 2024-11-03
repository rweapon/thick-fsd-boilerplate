type EmojiProps = {
  children: string;
};
export default function EmojiSpan({ children }: EmojiProps) {
  return (
    <span style={{ fontFamily: "color-emoji" }} role="img">
      {children}
    </span>
  );
}
