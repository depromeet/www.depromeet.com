export default function Footer() {
  const date = new Date();

  return (
    <footer>
      <span>&copy; {date.getFullYear()} Depromeet. All rights reserved.</span>
    </footer>
  );
}
