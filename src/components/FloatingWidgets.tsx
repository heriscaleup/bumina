"use client";

// Ikon-ikonnya kita definisikan di sini aja biar gampang
const WhatsAppIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
  </svg>
);

const BookingIcon = () => (
    <svg fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8">
        <path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,19H5V8h14V19z M12,11 c-1.66,0-3,1.34-3,3s1.34,3,3,3s3-1.34,3-3S13.66,11,12,11z"/>
    </svg>
);


const FloatingWidgets = () => {
  const widgets = [
    {
      name: "WhatsApp",
      icon: <WhatsAppIcon />,
      color: "bg-green-500 hover:bg-green-600",
      link: "https://wa.me/6285219460779?text=Halo%2C%20saya%20mau%20tanya%20info%20booking%20Homestay%20Bumina%20EENK",
    },
    {
      name: "Booking.com",
      icon: <BookingIcon />,
      color: "bg-blue-600 hover:bg-blue-700",
      link: "https://www.booking.com/hotel/id/bumina-eenk.html",
    },
  ];

  return (
    <div className="fixed bottom-5 right-4 z-50 sm:bottom-6 sm:right-6">
      <div className="flex flex-col gap-2.5 sm:gap-3">
        {widgets.map((widget) => (
          <a
            key={widget.name}
            href={widget.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex h-12 w-12 items-center justify-center rounded-full text-white shadow-xl shadow-emerald-950/20 transition-all duration-300 hover:-translate-y-1 hover:scale-110 sm:h-14 sm:w-14 ${widget.color}`}
            title={`Hubungi kami di ${widget.name}`}
          >
            {widget.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default FloatingWidgets;
