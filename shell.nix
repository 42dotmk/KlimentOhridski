{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = [
    pkgs.nodejs_20  # Change this if you need a different Node.js version
    pkgs.sqlite      # Required for Strapi's SQLite database (if used)
  ];

  shellHook = ''
    echo "Nix shell for Astro and Strapi initialized."
  '';
}

