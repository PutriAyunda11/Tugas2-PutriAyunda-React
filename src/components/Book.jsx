import { BookOpen, Heart } from "lucide-react";
import { useState } from "react";

export default function Book() {
  const [favorites, setFavorites] = useState([]);
  const [information, setInformation] = useState(null);

  const toggleFavorite = (id) => {
    setFavorites((prevFavs) =>
      prevFavs.includes(id) ? prevFavs.filter((favId) => favId !== id) : [...prevFavs, id]
    );
  };
  const toggleDropdown = (id) => {
    setInformation(information === id ? null : id);
  };

  const book = [
    {
      id: 1,
      foto: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1465062557i/26879178.jpg",
      judul: "Man Tiger",
      pengarang: "Eka Kurniawan",
      penerbit: "Gramedia Pustaka Utama",
      tahun_terbit: "2004",
      halaman: "320",
      sinopsis:
        "Margio, seorang pemuda desa biasa, membunuh Anwar Sadat—tetangga dan ayah kekasihnya—dengan cara yang brutal, seperti binatang yang lapar. Pembunuhan itu menjadi awal terbongkarnya rahasia gelap tentang warisan roh harimau putih yang menguasai Margio,diwariskan dari kakeknya, dan simbol dari kemarahan batin yang menderanya :contentReference[oaicite:1]{index=1}.\n\nPerlahan kisah bergerak mundur, menelusuri keluarga Margio yang miskin, penuh kekerasan domestik, dan cinta yang hancur. Dengan sentuhan realisme magis dan latar pedesaan Indonesia, Eka Kurniawan menyuguhkan kritik sosial mengenai kemiskinan, struktur patriarki, dan tradisi supranatural yang membentuk tragedi tak terelakkan :contentReference[oaicite:2]{index=2}.",
    },
    {
      id: 2,
      foto: "https://upload.wikimedia.org/wikipedia/id/thumb/1/17/Laskar_Pelangi_film.jpg/250px-Laskar_Pelangi_film.jpg",
      judul: "Laskar Pelangi",
      pengarang: "Andrea Hirata",
      penerbit: "Bentang Pustaka",
      tahun_terbit: "2005",
      halaman: "529",
      sinopsis:
        "Ikal dan sembilan teman sekelasnya dari SD Muhammadiyah di Belitung menghadapi keterbatasan fasilitas dan kemiskinan, namun semangat belajar mereka tak pernah padam. Lewat kisah tersebut, Andrea Hirata menunjukkan bagaimana keberanian, persahabatan, dan bimbingan guru yang berdedikasi bisa menumbuhkan harapan besar di desa terpencil :contentReference[oaicite:3]{index=3}.\n\nNovel ini bukan sekadar cerita pendidikan, tetapi juga refleksi tentang keindahan kecil di tengah kesulitan—tentang bagaimana mimpi anak-anak bisa menjadi pelangi di tengah kesuraman kehidupan. Cerita ini menginspirasi semangat optimisme kolektif dan apresiasi terhadap nilai pendidikan :contentReference[oaicite:4]{index=4}.",
    },
    {
      id: 3,
      foto: "https://inc.mizanstore.com/aassets/img/com_cart/produk/CANTIK_ITU_LUKA_(HC_LIMITED_EDITION).jpg",
      judul: "Cantik Itu Luka",
      pengarang: "Eka Kurniawan",
      penerbit: "Bentang Pustaka",
      tahun_terbit: "2002",
      halaman: "453",
      sinopsis:
        "Berpusat pada keluarga bermata satu dan wanita cantik bernama Dewi Ayu, novel ini menelusuri sejarah kelam kolonial, perang, hingga transnasionalisme di Jawa. Dengan gaya penceritaan cabang waktu dan humor gelap, Eka menyentuh soal seksualitas, kekerasan, dan mitologi lokal dalam balutan realisme magis.\n\nKarakter Dewi Ayu yang abadi dan penuh dualitas menjadi simbol dari trauma kolektif masyarakat; dari situ lahir narasi trans-generasi yang menghantui hingga beberapa generasi berikutnya. Narasi epik ini menawarkan pembacaan ulang atas sejarah dan trauma bangsa.",
    },
    {
      id: 4,
      foto: "https://cdn.gramedia.com/uploads/picture_meta/2023/2/28/3u4gvnfpk5bxw2zxwwzsrm.jpg",
      judul: "Saman",
      pengarang: "Ayu Utami",
      penerbit: "Gramedia Pustaka Utama",
      tahun_terbit: "1998",
      halaman: "256",
      sinopsis:
        "Mengisahkan seorang pastor dan homoseksualitas terpendam, SAMAN menantang norma sosial dan agama di Indonesia. Dengan narasi bergaya arus sadar dan sudut pandang ganda, Ayu Utami membuka dialog soal seksualitas, politik, dan spiritualitas dalam masyarakat patriarkal.",
    },
    {
      id: 5,
      foto: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1377676472i/1455669.jpg",
      judul: "Harimau! Harimau!",
      pengarang: "Mochtar Lubis",
      penerbit: "Pustaka Jaya",
      tahun_terbit: "1975",
      halaman: "216",
      sinopsis:
        "Sekelompok pemburu damar terjebak di hutan rimba Aceh setelah diserang harimau. Ketakutan akan serangan harimau membuat mereka panik dan mulai saling menyalahkan, hingga muncul konflik dan pengkhianatan dalam kelompok.\n\nMelalui alegori tentang harimau sebagai simbol rasa bersalah dan ketakutan dalam diri manusia, Mochtar Lubis menyentuh tema moralitas, kepemimpinan, dan keberanian menghadapi dosa masa lalu. Sebuah kisah psikologis penuh ketegangan dan renungan filosofis.",
    },
    {
      id: 6,
      foto: "https://ebooks.gramedia.com/ebook-covers/68985/image_highres/ID_PGN2021MTH11PGN.jpg",
      judul: "Pulang",
      pengarang: "Leila S. Chudori",
      penerbit: "Gramedia Pustaka Utama",
      tahun_terbit: "2012",
      halaman: "350",
      sinopsis:
        "Setelah tragedi 1965, Dimas Suryo dan rekan-rekannya terpaksa hidup di pengasingan di Paris sebagai eksil politik. Di sana, mereka membangun kehidupan baru sembari dihantui rasa kehilangan dan kerinduan akan tanah air.\n\nLeila S. Chudori menghadirkan kisah lintas generasi yang menyentuh luka sejarah bangsa. ‘Pulang’ adalah narasi tentang identitas, kebebasan, dan harga yang harus dibayar untuk sebuah idealisme.",
    },
    {
      id: 7,
      foto: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1428769762i/24826361.jpg",
      judul: "Beauty is a Wound (Cantik yang Luka)",
      pengarang: "Eka Kurniawan",
      penerbit: "Gramedia",
      tahun_terbit: "2002",
      halaman: "480",
      sinopsis:
        "Dengan latar sejarah kolonialisme, penjajahan Jepang, hingga Orde Baru, kisah ini mengisahkan Dewi Ayu—seorang pelacur cantik yang bangkit dari kubur. Ia dan keturunannya menghadapi tragedi demi tragedi dalam siklus kekerasan yang diwariskan secara turun-temurun.\n\nMelalui gaya realisme magis, Eka Kurniawan menguliti luka sejarah dan kejahatan kemanusiaan dengan penceritaan yang unik, penuh humor kelam dan kritik sosial tajam. Novel ini sering disebut sebagai salah satu karya sastra terbaik Indonesia modern.",
    },
    {
      id: 8,
      foto: "https://cdn.gramedia.com/uploads/items/9786024335885_senja_di_jakarta_0HROMcL.jpg",
      judul: "Senja di Jakarta",
      pengarang: "Mochtar Lubis",
      penerbit: "Pustaka Jaya",
      tahun_terbit: "1957",
      halaman: "300",
      sinopsis:
        "‘Senja di Jakarta’ menggambarkan potret masyarakat kelas atas dan bawah di ibu kota yang sarat dengan korupsi, kemunafikan, dan kemiskinan. Tokoh-tokoh dalam novel ini terjebak dalam sistem sosial yang tidak adil dan penuh intrik.\n\nSebagai novel politik pertama yang ditulis dalam bahasa Inggris oleh penulis Indonesia, karya ini memberikan kritik tajam terhadap moralitas elite birokrat dan memperlihatkan bagaimana sistem kekuasaan merusak nilai-nilai kemanusiaan.",
    },
    {
      id: 9,
      foto: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1327819077i/1492430.jpg",
      judul: "Azab dan Sengsara",
      pengarang: "Merari Siregar",
      penerbit: "Balai Pustaka",
      tahun_terbit: "1920",
      halaman: "123",
      sinopsis:
        "Novel ini menceritakan kisah cinta Nuraini dan Aminuddin yang tidak direstui karena perbedaan status sosial dan aturan adat. Keduanya dipaksa menikah dengan pilihan keluarga, menyebabkan penderitaan mendalam sepanjang hidup mereka.\n\n‘Azab dan Sengsara’ adalah novel pertama berbahasa Indonesia dan menjadi kritik terhadap perjodohan paksa dan budaya patriarki. Melalui kisahnya yang sederhana namun menyentuh, novel ini memperjuangkan kebebasan memilih cinta.",
    },
    {
      id: 10,
      foto: "https://ebooks.gramedia.com/ebook-covers/64210/image_highres/BLK_KTU202185402.jpg",
      judul: "Kalau Tak Untung",
      pengarang: "Sariamin Ismail",
      penerbit: "Balai Pustaka",
      tahun_terbit: "1933",
      halaman: "131",
      sinopsis:
        "Mengisahkan dua remaja, Rasmani dan Masrul, yang saling mencintai namun takdir memisahkan mereka. Karena tekanan keluarga dan situasi sosial, keduanya menikah dengan orang lain dan hanya menyimpan kenangan cinta dalam hati.\n\nSebagai novel cinta pertama karya perempuan Indonesia, ‘Kalau Tak Untung’ menyajikan realita pahit cinta yang terhalang norma dan adat. Sariamin menggambarkan dengan puitis bagaimana cinta sejati bisa abadi meski tak bersatu.",
    },
    {
      id: 11,
      foto: "https://gpu.id/data-gpu/images/img-book/94834/625173001.jpg",
      judul: "Ronggeng Dukuh Paruk",
      pengarang: "Ahmad Tohari",
      penerbit: "Pustaka Jaya",
      tahun_terbit: "1982",
      halaman: "400",
      sinopsis:
        "Srintil, seorang gadis dari Dukuh Paruk, dipercaya memiliki aura ronggeng dan ditakdirkan menjadi penari sakral yang membawa kebanggaan desa. Namun, status itu membuatnya harus menyerahkan tubuhnya dalam ritual ‘bukak klambu’ yang mengekang kemerdekaannya sebagai perempuan.\n\nLewat kehidupan Srintil, Ahmad Tohari menyampaikan kritik sosial tentang patriarki, kemiskinan, dan politik identitas di era 1965. Novel ini memadukan keindahan prosa dengan kesadaran sejarah dan kemanusiaan.",
    },
    {
      id: 12,
      foto: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1442310576i/22037542.jpg",
      judul: "Dilan: Dia adalah Dilanku Tahun 1990",
      pengarang: "Pidi Baiq",
      penerbit: "Pastel Books",
      tahun_terbit: "2014",
      halaman: "300",
      sinopsis:
        "Milea, seorang siswi pindahan, bertemu dengan Dilan yang nyentrik dan tidak biasa. Dari situ kisah cinta remaja mereka tumbuh dengan segala keunikannya, diiringi gaya bahasa yang ringan dan penuh humor.\n\nNovel ini menjadi representasi kisah cinta anak SMA era 90-an yang penuh nostalgia. Gaya narasi santai Pidi Baiq membuat pembaca merasa dekat dengan karakter dan konflik yang relatable.",
    },
    {
      id: 13,
      foto: "https://img.bukabuku.net/product/3/2/32d91448f1059a50a8d7acc63b3588a5.jpg",
      judul: "Perahu Kertas",
      pengarang: "Dee Lestari",
      penerbit: "Bentang Pustaka",
      tahun_terbit: "2006",
      halaman: "336",
      sinopsis:
        "Kugy dan Keenan, dua anak muda yang sama-sama memiliki jiwa seni, bertemu di kampus dan menjalin persahabatan unik. Kisah mereka penuh lika-liku, mimpi, dan harapan yang tidak selalu berjalan searah.\n\n‘Perahu Kertas’ menggambarkan perjalanan menemukan jati diri dan makna cinta sejati. Dee mengemas cerita dengan gaya ringan dan imajinatif yang membuatnya menyentuh hati pembaca muda.",
    },
    {
      id: 14,
      foto: "https://bukukita.com/babacms/displaybuku/83966_f.jpg",
      judul: "Filosofi Kopi",
      pengarang: "Dee Lestari",
      penerbit: "Bentang Pustaka",
      tahun_terbit: "2012",
      halaman: "200",
      sinopsis:
        "Ben dan Jody membuka kedai kopi dengan idealisme tinggi tentang rasa dan makna hidup. Mereka tak hanya menjual kopi, tapi filosofi yang mengiringinya.\n\nKumpulan cerpen ini berisi kisah inspiratif tentang pencarian jati diri, cita rasa hidup, dan perjuangan membangun sesuatu dari nol. Sangat cocok bagi pencinta kopi dan mereka yang sedang mencari makna hidup.",
    },
    {
      id: 15,
      foto: "https://cdn.gramedia.com/uploads/picture_meta/2023/12/22/2hegsxjpmzzanpbrp6erk9.jpg",
      judul: "5 cm",
      pengarang: "Donny Dhirgantoro",
      penerbit: "Pastel Books",
      tahun_terbit: "2005",
      halaman: "256",
      sinopsis:
        "Lima sahabat memutuskan berpisah selama tiga bulan untuk mengejar impian masing-masing. Mereka kembali berkumpul untuk mendaki Gunung Semeru sebagai bentuk pencapaian dan persahabatan sejati.\n\n‘5 cm’ memotivasi pembaca untuk tidak menyerah pada impian dan percaya pada proses. Disampaikan dengan semangat muda dan narasi inspiratif, buku ini menjadi simbol motivasi anak muda Indonesia.",
    },
    {
      id: 16,
      foto: "https://gpu.id/data-gpu/images/uploads/book/c930a5498c1b341c2077747e8bc1343f.jpg",
      judul: "Critical Eleven",
      pengarang: "Ika Natassa",
      penerbit: "Gramedia Pustaka Utama",
      tahun_terbit: "2015",
      halaman: "320",
      sinopsis:
        "Ale dan Anya bertemu dalam penerbangan dari Jakarta ke Sydney. Dalam sebelas menit awal percakapan mereka, benih cinta mulai tumbuh. Tapi pernikahan mereka diuji oleh tragedi yang merobek hati.\n\n‘Critical Eleven’ menyajikan kisah cinta dewasa, konflik batin, dan penggambaran psikologis yang kuat. Gaya narasi Ika yang cerdas membuat novel ini digemari pembaca urban.",
    },
    {
      id: 17,
      foto: "https://m.media-amazon.com/images/M/MV5BNTMxMjliMzMtYWUzOC00MmJjLWIzNmItNzU1M2I2NmY4NWVmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      judul: "Heartbreak Motel",
      pengarang: "Ika Natassa",
      penerbit: "Gramedia Pustaka Utama",
      tahun_terbit: "2022",
      halaman: "—",
      sinopsis:
        "‘Heartbreak Motel’ adalah tempat virtual bagi orang-orang patah hati untuk menumpahkan perasaannya secara anonim. Namun, kisahnya berubah saat para karakter saling terkoneksi di dunia nyata.\n\nDengan gaya narasi kontemporer dan unsur teknologi, Ika Natassa mengeksplorasi sisi emosional manusia modern yang kesepian dan mencari pelarian di dunia digital.",
    },
    {
      id: 18,
      foto: "https://ebooks.gramedia.com/ebook-covers/40621/big_covers/ID_GPU2017MTH10HBJNCF_B.jpg",
      judul: "Hujan Bulan Juni",
      pengarang: "Sapardi Djoko Damono",
      penerbit: "Gramedia",
      tahun_terbit: "1994",
      halaman: "240",
      sinopsis:
        "Dikenal dari puisinya, ‘Hujan Bulan Juni’ kini menjadi novel yang memperluas kisah Sarwono dan Pingkan. Mereka saling mencintai, tapi berbeda budaya dan agama, menjadikan cinta mereka diuji.\n\nSapardi menyampaikan kisah dengan puitis dan dalam, penuh perenungan dan filosofi cinta yang tidak sekadar romantika, tetapi juga pergulatan identitas dan kesetiaan.",
    },
    {
      id: 19,
      foto: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1463799193i/963151.jpg",
      judul: "Arus Balik",
      pengarang: "Pramoedya Ananta Toer",
      penerbit: "Lentera Dipantara",
      tahun_terbit: "1995",
      halaman: "400",
      sinopsis:
        "Berlatar abad ke-16, Pramoedya menggambarkan bagaimana Nusantara sebagai pusat maritim besar mengalami kemunduran akibat kolonialisme dan kebijakan elit. Tokoh Wiranggaleng menjadi simbol perlawanan intelektual.\n\n‘Arus Balik’ adalah refleksi sejarah yang menyelami dinamika kekuasaan, budaya, dan identitas bangsa. Pramoedya menunjukkan bahwa sejarah adalah alat pembebasan maupun penindasan.",
    },
    {
      id: 20,
      foto: "https://upload.wikimedia.org/wikipedia/id/5/51/Bumi_Manusia_poster.jpg",
      judul: "Bumi Manusia",
      pengarang: "Pramoedya Ananta Toer",
      penerbit: "Hasta Mitra",
      tahun_terbit: "1980",
      halaman: "600",
      sinopsis:
        "Minke, seorang pribumi terdidik di era kolonial, jatuh cinta pada Annelies, gadis Indo. Hubungan mereka tidak hanya kisah cinta, tapi juga kritik terhadap ketimpangan sosial dan hukum kolonial.\n\n‘Bumi Manusia’ adalah karya besar yang memperjuangkan kesadaran bangsa. Lewat narasi humanis dan reflektif, Pramoedya menyuarakan suara yang dulu dibungkam.",
    },
  ];

  return (
    <div className="p-4 sm:p-6 md:p-8">
      <h1 className=" lg:pl-25 text-xl md:text-2xl font-bold text-gray-800 mb-6 pb-2 w-fit">
        Recommendation Novel Populer
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 sm:grid-cols-3 gap-x-10 gap-y-8 lg:pl-25 lg:pr-25">
        {book.map((contents, id) => (
          <div
            key={id}
            className="relative border border-gray-300 rounded-md p-3 bg-white text-center shadow-sm hover:shadow-md transition duration-300"
          >
            <h2 className="font-semibold text-base mb-2">{contents.judul}</h2>
            <img
              src={contents.foto}
              alt={contents.judul}
              className="mx-auto h-40 w-auto object-cover rounded-sm"
            />
            <p className="mt-2 text-sm text-gray-700">
              <span className="text-orange-700 font-medium">Tahun:</span>{" "}
              {contents.tahun_terbit}
            </p>
            <div className="mt-3 flex items-center justify-center space-x-2">
              <button
                onClick={() => toggleDropdown(contents.id)}
                className="flex items-center text-black bg-gray-150 rounded-lg shadow px-2 py-1 space-x-1 hover:bg-gray-400 transition"
              >
                <BookOpen size={18} className="mt-[2px]" />
                <span className="font-semibold text-sm leading-none">Info</span>
              </button>

              <div>
                <Heart
                  size={19}
                  strokeWidth={2.5}
                  className={
                    favorites.includes(contents.id)
                      ? "text-red-500"
                      : "text-black"
                  }
                  fill={favorites.includes(contents.id) ? "red" : "transparent"}
                  onClick={() => toggleFavorite(contents.id)}
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      {information && (
        <div className="fixed inset-0 z-40 flex items-center justify-center backdrop-blur-sm bg-black/30 px-4">
          <div className="relative bg-white p-4 sm:p-6 rounded-lg shadow-lg w-full max-w-3xl z-50 flex flex-col overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setInformation(null)}
              className=" absolute top-2 right-3 text-gray-500 hover:text-black text-2xl font-bold "
            >
              X
            </button>
            <div className="flex flex-col md:flex-row gap-6 mt-10 items-center md:items-start justify-center">
              <img
                src={book.find((b) => b.id === information)?.foto}
                alt=""
                className="md:h-80 w-56 object-cover rounded-sm sm:h-60"
              />
              <div className="flex flex-col justify-between w-full max-w-md">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 text-center md:text-left">
                    {book.find((b) => b.id === information)?.judul}
                  </h2>
                  <p className="text-sm sm:text-base mb-2">
                    <strong>Penulis:</strong>{" "}
                    {book.find((b) => b.id === information)?.pengarang}
                  </p>
                  <p className="text-sm sm:text-base mb-2">
                    <strong>Penerbit:</strong>{" "}
                    {book.find((b) => b.id === information)?.penerbit}
                  </p>
                  <p className="text-sm sm:text-base mb-2">
                    <strong>Tahun:</strong>{" "}
                    {book.find((b) => b.id === information)?.tahun_terbit}
                  </p>
                  <p className="text-sm sm:text-base">
                    <strong>Halaman:</strong>{" "}
                    {book.find((b) => b.id === information)?.halaman}
                  </p>
                </div>
                <button className="mt-6 self-center md:self-start bg-black text-white px-4 py-2 rounded hover:bg-gray-800 text-base font-semibold">
                  Start Reading
                </button>
              </div>
            </div>
            <div className="hidden md:block mt-6 max-h-60 overflow-y-auto pr-1 sm:pr-2">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800">
                Sinopsis
              </h3>
              <p className="text-justify text-gray-700 whitespace-pre-line leading-relaxed text-sm sm:text-base">
                {book.find((b) => b.id === information)?.sinopsis}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
