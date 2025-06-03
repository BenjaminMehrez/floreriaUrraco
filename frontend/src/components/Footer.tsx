import { Instagram } from "lucide-react";

function Footer() {
  return (
    <footer className="footer bg-second text-neutral-content p-10">
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-10 sm:flex-row sm:gap-0 justify-between">
        <aside>
          <img src="/ramo.png" alt="logo" className="w-20"/>
          <p>
            Floreria Madison.
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Instagram</h6>
          <div className="grid grid-flow-col gap-4">
            <a href="https://www.instagram.com/">
              <Instagram />
            </a>
          </div>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
