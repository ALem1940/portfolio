function Footer() {
  const year = new Date().getFullYear();
  const address = "https://github.com/ALem1940";
  return (
    <div>
      <p>&copy; {year} Ashanti Lemonia</p>
      <a href={address}>My GitHub</a>
    </div>
  );
}

export default Footer;
