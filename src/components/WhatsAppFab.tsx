const WhatsAppFab = () => {
  return (
    <a
      href="https://wa.me/6597265330"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-transform hover:scale-110 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#25D366]"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="h-7 w-7 fill-white"
        aria-hidden="true"
      >
        <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.74.315-.688.645-1.03 1.318-1.045 2.262v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.158-.69.158-1.046 0-.745-1.95-1.645-2.643-1.645zm-2.978 7.604c-1.617 0-3.205-.445-4.563-1.318l-3.193 1.018 1.043-3.077a8.51 8.51 0 0 1-1.633-5.03c0-4.703 3.83-8.534 8.534-8.534s8.534 3.83 8.534 8.534-3.846 8.407-8.722 8.407zm0-18.69c-5.62 0-10.18 4.56-10.18 10.18 0 1.92.53 3.793 1.546 5.43L5 27.43l5.85-1.918a10.07 10.07 0 0 0 5.28 1.49c5.62 0 10.18-4.56 10.18-10.18 0-5.62-4.71-10.183-10.18-10.183z" />
      </svg>
    </a>
  );
};

export default WhatsAppFab;
