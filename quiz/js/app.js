const setup_wrapper = document.querySelector('.setup-wrapper');
const quiz_category = document.querySelector('.quiz-category');
const quiz_limit = document.querySelector('.quiz-limit');
const quiz_difficulty = document.getElementsByName('difficulty');
const start_quiz_btn = document.querySelector('.start-btn');

const _question = document.getElementById('question');
const _options = document.querySelector('.quiz-options');
const _checkBtn = document.getElementById('check-answer');
const _playAgainBtn = document.getElementById('play-again');
const _result = document.getElementById('result');
const _correctScore = document.getElementById('correct-score');
const _totalQuestion = document.getElementById('total-question');

let category = '';
let limit = '';
let difficulty = '';

let correctAnswer = "", correctScore = askedCount = 0, totalQuestion = 10;

// load question
function loadQuestion() {
    const settings = loadSettings();
    const questions = getQuestions(settings.category, settings.difficulty);
    _result.innerHTML = "";
    showQuestion(questions[askedCount]);
}

const quizData = {
    "Sports": {
        "easy": [
            { "question": "Berapa jumlah pemain dalam satu tim sepak bola?", "options": ["10", "11", "12", "13"], "correct": "11" },
            { "question": "Olahraga apa yang menggunakan ring?", "options": ["Basket", "Sepak Bola", "Bulu Tangkis", "Tenis"], "correct": "Basket" },
            { "question": "Berapa menit durasi pertandingan sepak bola?", "options": ["45", "60", "90", "120"], "correct": "90" },
            { "question": "Apa warna bola dalam olahraga tenis meja?", "options": ["Merah", "Kuning", "Putih", "Biru"], "correct": "Putih" },
            { "question": "Negara mana yang memenangkan Piala Dunia FIFA terbanyak?", "options": ["Brasil", "Jerman", "Argentina", "Italia"], "correct": "Brasil" },
            { "question": "Olahraga apa yang dimainkan di Wimbledon?", "options": ["Tenis", "Sepak Bola", "Bola Basket", "Bulu Tangkis"], "correct": "Tenis" },
            { "question": "Berapa jumlah pemain dalam tim bola basket?", "options": ["3", "5", "7", "9"], "correct": "5" },
            { "question": "Apa nama olahraga yang menggunakan tongkat dan bola kecil di lapangan rumput?", "options": ["Baseball", "Golf", "Hoki", "Kriket"], "correct": "Golf" },
            { "question": "Siapa yang dikenal sebagai legenda bulu tangkis Indonesia?", "options": ["Taufik Hidayat", "Rudy Hartono", "Susi Susanti", "Semua benar"], "correct": "Semua benar" },
            { "question": "Di mana Olimpiade pertama kali diadakan?", "options": ["Athena", "Roma", "Paris", "London"], "correct": "Athena" },
            { "question": "Apa nama balapan mobil paling terkenal di dunia?", "options": ["Formula 1", "Nascar", "MotoGP", "Rally Dakar"], "correct": "Formula 1" },
            { "question": "Dalam olahraga baseball, berapa base yang harus dilalui untuk mencetak run?", "options": ["2", "3", "4", "5"], "correct": "4" },
            { "question": "Olahraga apa yang menggunakan shuttlecock?", "options": ["Bulu Tangkis", "Tenis Meja", "Squash", "Golf"], "correct": "Bulu Tangkis" },
            { "question": "Siapa atlet renang legendaris dengan medali emas Olimpiade terbanyak?", "options": ["Michael Phelps", "Ian Thorpe", "Mark Spitz", "Ryan Lochte"], "correct": "Michael Phelps" },
            { "question": "Apa nama trofi yang diberikan dalam turnamen sepak bola Eropa?", "options": ["Liga Champions", "Piala FA", "Piala Dunia", "Piala UEFA"], "correct": "Liga Champions" },
            { "question": "Di olahraga mana kita bisa menemukan istilah 'strike' dan 'spare'?", "options": ["Baseball", "Bowling", "Golf", "Tenis"], "correct": "Bowling" },
            { "question": "Apa nama stadion terbesar di dunia?", "options": ["Camp Nou", "Maracanã", "Rungrado May Day Stadium", "Wembley"], "correct": "Rungrado May Day Stadium" },
            { "question": "Siapa pemain yang dikenal sebagai 'King of Clay' dalam tenis?", "options": ["Roger Federer", "Rafael Nadal", "Novak Djokovic", "Andy Murray"], "correct": "Rafael Nadal" },
            { "question": "Berapa jumlah lubang dalam satu permainan golf standar?", "options": ["9", "12", "15", "18"], "correct": "18" }
        ],
        "medium": [
            { "question": "Siapa pencetak gol terbanyak sepanjang masa di Liga Champions?", "options": ["Cristiano Ronaldo", "Lionel Messi", "Pele", "Zlatan Ibrahimovic"], "correct": "Cristiano Ronaldo" },
            { "question": "Apa nama trofi yang diberikan kepada pemenang turnamen Wimbledon?", "options": ["Piala Dunia", "Piala Davis", "Trofi Venus Rosewater", "Piala FA"], "correct": "Trofi Venus Rosewater" },
            { "question": "Siapa pebalap F1 dengan gelar juara dunia terbanyak hingga saat ini?", "options": ["Michael Schumacher", "Lewis Hamilton", "Ayrton Senna", "Sebastian Vettel"], "correct": "Lewis Hamilton" },
            { "question": "Di negara mana olahraga sumo berasal?", "options": ["Cina", "Jepang", "Korea", "Thailand"], "correct": "Jepang" },
            { "question": "Apa nama arena balap MotoGP di Italia?", "options": ["Silverstone", "Monza", "Mugello", "Suzuka"], "correct": "Mugello" },
            { "question": "Berapa jumlah pemain dalam satu tim sepak bola di lapangan?", "options": ["9", "10", "11", "12"], "correct": "11" },
            { "question": "Siapa atlet dengan medali emas Olimpiade terbanyak sepanjang sejarah?", "options": ["Usain Bolt", "Michael Phelps", "Simone Biles", "Larisa Latynina"], "correct": "Michael Phelps" },
            { "question": "Klub mana yang memenangkan Liga Inggris pertama sejak format Premier League diperkenalkan?", "options": ["Manchester United", "Arsenal", "Chelsea", "Liverpool"], "correct": "Manchester United" },
            { "question": "Dalam olahraga bulu tangkis, berapa poin yang dibutuhkan untuk memenangkan satu set dalam format modern?", "options": ["15", "21", "25", "30"], "correct": "21" },
            { "question": "Siapa petenis wanita yang memegang rekor Grand Slam terbanyak sepanjang sejarah?", "options": ["Serena Williams", "Steffi Graf", "Margaret Court", "Martina Navratilova"], "correct": "Margaret Court" },
            { "question": "Di cabang olahraga apa Muhammad Ali terkenal?", "options": ["Tinju", "Gulat", "Angkat Besi", "Karate"], "correct": "Tinju" },
            { "question": "Apa warna bendera yang dikibarkan saat balapan F1 berakhir?", "options": ["Merah", "Kuning", "Putih", "Hitam-Putih"], "correct": "Hitam-Putih" },
            { "question": "Siapa legenda sepak bola Brasil yang memenangkan tiga Piala Dunia?", "options": ["Ronaldo", "Ronaldinho", "Pele", "Zico"], "correct": "Pele" },
            { "question": "Siapa pemain NBA yang memiliki julukan 'Black Mamba'?", "options": ["LeBron James", "Michael Jordan", "Kobe Bryant", "Shaquille O'Neal"], "correct": "Kobe Bryant" },
            { "question": "Di Olimpiade, berapa lingkaran yang terdapat dalam logo Olimpiade?", "options": ["3", "4", "5", "6"], "correct": "5" },
            { "question": "Siapa pebalap MotoGP dengan gelar juara dunia terbanyak sepanjang sejarah?", "options": ["Marc Marquez", "Jorge Lorenzo", "Valentino Rossi", "Giacomo Agostini"], "correct": "Giacomo Agostini" },
            { "question": "Klub mana yang memenangkan trofi Liga Champions terbanyak?", "options": ["Barcelona", "Manchester United", "Real Madrid", "Bayern Munich"], "correct": "Real Madrid" },
            { "question": "Siapa pembalap F1 pertama dari Indonesia?", "options": ["Rio Haryanto", "Sean Gelael", "Alex Yoong", "Ananda Mikola"], "correct": "Rio Haryanto" },
            { "question": "Apa nama stadion terkenal di Barcelona?", "options": ["Santiago Bernabéu", "San Siro", "Camp Nou", "Old Trafford"], "correct": "Camp Nou" }
        ],
        "hard": [
            { "question": "Kapan pertama kali Olimpiade modern diselenggarakan?", "options": ["1896", "1900", "1912", "1920"], "correct": "1896" },
            { "question": "Siapa yang memenangkan medali emas terbanyak dalam sejarah Olimpiade?", "options": ["Usain Bolt", "Michael Phelps", "Larisa Latynina", "Carl Lewis"], "correct": "Michael Phelps" },
            { "question": "Apa julukan tim nasional sepak bola Brasil?", "options": ["La Albiceleste", "A Selecao", "Die Mannschaft", "Les Bleus"], "correct": "A Selecao" },
            { "question": "Siapa pemain dengan jumlah penampilan terbanyak dalam sejarah Premier League?", "options": ["Ryan Giggs", "Frank Lampard", "Gareth Barry", "Steven Gerrard"], "correct": "Gareth Barry" },
            { "question": "Apa nama turnamen golf yang diadakan setiap tahun di Augusta National Golf Club?", "options": ["PGA Championship", "The Masters", "The Open Championship", "US Open"], "correct": "The Masters" },
            { "question": "Siapa satu-satunya pebalap yang pernah memenangkan kejuaraan dunia Formula 1 dan MotoGP?", "options": ["Lewis Hamilton", "Michael Schumacher", "Valentino Rossi", "John Surtees"], "correct": "John Surtees" },
            { "question": "Klub mana yang memenangkan treble (Liga, Piala Domestik, Liga Champions) pertama dalam sejarah sepak bola?", "options": ["Manchester United", "Barcelona", "Inter Milan", "Celtic"], "correct": "Celtic" },
            { "question": "Berapa poin yang diperlukan untuk memenangkan satu set dalam tenis jika tidak ada tie-break?", "options": ["4", "6", "7", "10"], "correct": "6" },
            { "question": "Siapa pebalap MotoGP pertama yang memenangkan 10 balapan berturut-turut dalam satu musim?", "options": ["Mick Doohan", "Valentino Rossi", "Marc Marquez", "Giacomo Agostini"], "correct": "Marc Marquez" },
            { "question": "Siapa pemain NBA dengan poin terbanyak sepanjang sejarah hingga tahun 2023?", "options": ["Michael Jordan", "Kobe Bryant", "LeBron James", "Kareem Abdul-Jabbar"], "correct": "LeBron James" },
            { "question": "Siapa petinju yang tidak terkalahkan sepanjang karier profesionalnya dengan rekor 50-0?", "options": ["Mike Tyson", "Muhammad Ali", "Floyd Mayweather Jr.", "Manny Pacquiao"], "correct": "Floyd Mayweather Jr." },
            { "question": "Negara mana yang memenangkan Piala Dunia FIFA pertama pada tahun 1930?", "options": ["Brasil", "Argentina", "Uruguay", "Jerman"], "correct": "Uruguay" },
            { "question": "Siapa pemain termuda yang pernah memenangkan gelar Grand Slam tunggal dalam sejarah tenis?", "options": ["Serena Williams", "Maria Sharapova", "Martina Hingis", "Steffi Graf"], "correct": "Martina Hingis" },
            { "question": "Berapa banyak lap dalam satu balapan resmi di sirkuit Monaco dalam Formula 1?", "options": ["50", "55", "78", "82"], "correct": "78" },
            { "question": "Siapa pesepakbola yang telah memenangkan Ballon d'Or terbanyak sepanjang sejarah?", "options": ["Cristiano Ronaldo", "Lionel Messi", "Michel Platini", "Johan Cruyff"], "correct": "Lionel Messi" },
            { "question": "Apa stadion dengan kapasitas terbesar di dunia?", "options": ["Maracanã", "Camp Nou", "Rungrado 1st of May Stadium", "Wembley"], "correct": "Rungrado 1st of May Stadium" },
            { "question": "Siapa pemain tenis yang memegang rekor gelar Grand Slam terbanyak di kategori tunggal putra?", "options": ["Rafael Nadal", "Roger Federer", "Novak Djokovic", "Pete Sampras"], "correct": "Novak Djokovic" },
            { "question": "Di cabang olahraga apa Michael Jordan terkenal?", "options": ["Baseball", "American Football", "Basketball", "Hockey"], "correct": "Basketball" },
            { "question": "Siapa perenang wanita dengan jumlah medali emas terbanyak dalam sejarah Olimpiade?", "options": ["Katie Ledecky", "Missy Franklin", "Jenny Thompson", "Kristin Otto"], "correct": "Kristin Otto" }
        ]
    },
    "General Knowledge": {
        "easy": [
            { "question": "Apa ibu kota Indonesia?", "options": ["Jakarta", "Surabaya", "Bandung", "Medan"], "correct": "Jakarta" },
            { "question": "Siapa orang tercantik di dunia?", "options": ["Ages", "ages", "ages", "ages"], "correct": "Ages" },
            { "question": "Apa warna bendera Indonesia?", "options": ["Merah dan putih", "Biru dan putih", "Merah dan kuning", "Hijau dan putih"], "correct": "Merah dan putih" },
            { "question": "Apa mata uang resmi Indonesia?", "options": ["Ringgit", "Baht", "Rupiah", "Dollar"], "correct": "Rupiah" },
            { "question": "Siapa presiden pertama Indonesia?", "options": ["Joko Widodo", "Soekarno", "Suharto", "Habibie"], "correct": "Soekarno" },
            { "question": "Pulau terbesar di Indonesia adalah?", "options": ["Jawa", "Sumatra", "Kalimantan", "Sulawesi"], "correct": "Kalimantan" },
            { "question": "Hari Kemerdekaan Indonesia diperingati setiap tanggal?", "options": ["17 Juli", "17 Agustus", "17 September", "17 Oktober"], "correct": "17 Agustus" },
            { "question": "Lambang negara Indonesia adalah?", "options": ["Merpati", "Garuda", "Harimau", "Naga"], "correct": "Garuda" },
            { "question": "Berapa jumlah provinsi di Indonesia?", "options": ["30", "34", "37", "40"], "correct": "38" },
            { "question": "Gunung tertinggi di Indonesia adalah?", "options": ["Gunung Merapi", "Gunung Rinjani", "Gunung Semeru", "Puncak Jaya"], "correct": "Puncak Jaya" },
            { "question": "Sungai terpanjang di Indonesia adalah?", "options": ["Sungai Kapuas", "Sungai Mahakam", "Sungai Musi", "Sungai Brantas"], "correct": "Sungai Kapuas" },
            { "question": "Danau terbesar di Indonesia adalah?", "options": ["Danau Toba", "Danau Maninjau", "Danau Sentani", "Danau Singkarak"], "correct": "Danau Toba" },
            { "question": "Alat musik tradisional dari Jawa Barat adalah?", "options": ["Gamelan", "Angklung", "Sasando", "Tifa"], "correct": "Angklung" },
            { "question": "Pulau Dewata adalah sebutan untuk pulau?", "options": ["Sumatra", "Bali", "Lombok", "Flores"], "correct": "Bali" },
            { "question": "Makanan khas dari Padang yang terkenal adalah?", "options": ["Pempek", "Gudeg", "Rendang", "Soto Betawi"], "correct": "Rendang" },
            { "question": "Candi Borobudur terletak di provinsi?", "options": ["Jawa Barat", "Jawa Timur", "Jawa Tengah", "Yogyakarta"], "correct": "Jawa Tengah" },
            { "question": "Hewan khas yang hanya ditemukan di Pulau Komodo adalah?", "options": ["Harimau", "Komodo", "Anoa", "Badak"], "correct": "Komodo" },
            { "question": "Lagu kebangsaan Indonesia adalah?", "options": ["Halo-Halo Bandung", "Indonesia Pusaka", "Indonesia Raya", "Tanah Airku"], "correct": "Indonesia Raya" },
            { "question": "Batik berasal dari negara mana?", "options": ["Thailand", "Malaysia", "Indonesia", "Vietnam"], "correct": "Indonesia" }
        ],
        "medium": [
            { "question": "Siapa penemu bola lampu?", "options": ["Nikola Tesla", "Thomas Edison", "Alexander Graham Bell", "Isaac Newton"], "correct": "Thomas Edison" },
            { "question": "Siapa ilmuwan yang mengembangkan teori relativitas?", "options": ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Stephen Hawking"], "correct": "Albert Einstein" },
            { "question": "Apa kepanjangan dari DNA?", "options": ["Deoxyribonucleic Acid", "Dinucleotide Acid", "Deoxyribose Natural Acid", "Dioxygen Nucleic Acid"], "correct": "Deoxyribonucleic Acid" },
            { "question": "Siapa penemu telepon?", "options": ["Nikola Tesla", "Thomas Edison", "Alexander Graham Bell", "Guglielmo Marconi"], "correct": "Alexander Graham Bell" },
            { "question": "Planet manakah yang dikenal sebagai 'Planet Merah'?", "options": ["Venus", "Mars", "Jupiter", "Saturnus"], "correct": "Mars" },
            { "question": "Siapa yang menemukan hukum gravitasi?", "options": ["Albert Einstein", "Galileo Galilei", "Isaac Newton", "Johannes Kepler"], "correct": "Isaac Newton" },
            { "question": "Unsur kimia apa yang memiliki simbol 'O'?", "options": ["Osmium", "Oksigen", "Oganesson", "Obsidium"], "correct": "Oksigen" },
            { "question": "Siapa yang menciptakan komputer pertama?", "options": ["Alan Turing", "Charles Babbage", "John von Neumann", "Steve Jobs"], "correct": "Charles Babbage" },
            { "question": "Apa nama galaksi tempat bumi berada?", "options": ["Andromeda", "Bima Sakti", "Triangulum", "Centaurus A"], "correct": "Bima Sakti" },
            { "question": "Siapa ilmuwan yang mengembangkan vaksin pertama?", "options": ["Louis Pasteur", "Edward Jenner", "Alexander Fleming", "Joseph Lister"], "correct": "Edward Jenner" },
            { "question": "Apa nama partikel terkecil dari sebuah unsur?", "options": ["Molekul", "Proton", "Atom", "Neutron"], "correct": "Atom" },
            { "question": "Siapa yang menemukan penisilin?", "options": ["Louis Pasteur", "Alexander Fleming", "Robert Koch", "Marie Curie"], "correct": "Alexander Fleming" },
            { "question": "Manakah yang merupakan sumber energi terbarukan?", "options": ["Batu bara", "Minyak bumi", "Energi surya", "Gas alam"], "correct": "Energi surya" },
            { "question": "Apa kepanjangan dari NASA?", "options": ["National Aeronautics and Space Administration", "North American Space Agency", "New Aerospace Scientific Association", "National Association of Space Astronauts"], "correct": "National Aeronautics and Space Administration" },
            { "question": "Siapa penemu mesin cetak?", "options": ["Johannes Gutenberg", "Leonardo da Vinci", "Benjamin Franklin", "Thomas More"], "correct": "Johannes Gutenberg" },
            { "question": "Berapakah suhu titik beku air dalam skala Celsius?", "options": ["0°C", "32°C", "100°C", "273°C"], "correct": "0°C" },
            { "question": "Apa nama alat yang digunakan untuk mengukur gempa bumi?", "options": ["Teleskop", "Barometer", "Seismograf", "Hidrometer"], "correct": "Seismograf" },
            { "question": "Apa unsur utama yang ditemukan dalam matahari?", "options": ["Oksigen", "Hidrogen", "Karbon", "Nitrogen"], "correct": "Hidrogen" },
            { "question": "Apa yang menyebabkan warna biru pada langit?", "options": ["Refleksi cahaya", "Pembiasan cahaya", "Hamburan Rayleigh", "Efek Doppler"], "correct": "Hamburan Rayleigh" }
        ],
        "hard": [
            { "question": "Apa nama sungai terpanjang di dunia?", "options": ["Amazon", "Nile", "Yangtze", "Mississippi"], "correct": "Nile" },
            { "question": "Gunung tertinggi di dunia adalah?", "options": ["K2", "Kilimanjaro", "Everest", "Denali"], "correct": "Everest" },
            { "question": "Siapa yang menulis buku 'The Origin of Species'?", "options": ["Isaac Newton", "Albert Einstein", "Charles Darwin", "Galileo Galilei"], "correct": "Charles Darwin" },
            { "question": "Apa ibukota Mongolia?", "options": ["Astana", "Ulaanbaatar", "Tashkent", "Bishkek"], "correct": "Ulaanbaatar" },
            { "question": "Apa unsur paling melimpah di kerak bumi?", "options": ["Besi", "Oksigen", "Aluminium", "Silikon"], "correct": "Oksigen" },
            { "question": "Siapa filsuf Yunani yang menjadi murid Socrates dan guru bagi Aristoteles?", "options": ["Plato", "Heraclitus", "Pythagoras", "Democritus"], "correct": "Plato" },
            { "question": "Di mana lokasi reruntuhan kota kuno Machu Picchu?", "options": ["Brasil", "Peru", "Meksiko", "Guatemala"], "correct": "Peru" },
            { "question": "Apa nama galaksi terbesar dalam Local Group?", "options": ["Bima Sakti", "Andromeda", "Triangulum", "Messier 87"], "correct": "Andromeda" },
            { "question": "Siapa penulis 'Divine Comedy'?", "options": ["Homer", "Dante Alighieri", "Virgil", "Geoffrey Chaucer"], "correct": "Dante Alighieri" },
            { "question": "Berapa jumlah unsur dalam tabel periodik?", "options": ["114", "118", "120", "126"], "correct": "118" },
            { "question": "Apa ibu kota Kazakhstan?", "options": ["Tashkent", "Nur-Sultan", "Almaty", "Dushanbe"], "correct": "Nur-Sultan" },
            { "question": "Apa nama lapisan atmosfer yang melindungi bumi dari radiasi ultraviolet?", "options": ["Troposfer", "Stratosfer", "Mesosfer", "Ozon"], "correct": "Ozon" },
            { "question": "Siapa kaisar pertama Tiongkok?", "options": ["Kublai Khan", "Qin Shi Huang", "Sun Yat-sen", "Mao Zedong"], "correct": "Qin Shi Huang" },
            { "question": "Di mana letak Patung Moai yang terkenal?", "options": ["Selandia Baru", "Pulau Paskah", "Hawaii", "Madagaskar"], "correct": "Pulau Paskah" },
            { "question": "Siapa yang menemukan gelombang radio?", "options": ["Nikola Tesla", "Guglielmo Marconi", "James Clerk Maxwell", "Heinrich Hertz"], "correct": "Heinrich Hertz" },
            { "question": "Apa nama ibukota Kerajaan Persia kuno?", "options": ["Babylon", "Memphis", "Persepolis", "Thebes"], "correct": "Persepolis" },
            { "question": "Apa nama lautan terdalam di dunia?", "options": ["Samudra Atlantik", "Samudra Pasifik", "Samudra Hindia", "Samudra Arktik"], "correct": "Samudra Pasifik" },
            { "question": "Di mana letak terumbu karang terbesar di dunia?", "options": ["Hawaii", "Karibia", "Great Barrier Reef", "Filipina"], "correct": "Great Barrier Reef" },
            { "question": "Siapa yang menemukan hukum gerak planet?", "options": ["Isaac Newton", "Johannes Kepler", "Galileo Galilei", "Tycho Brahe"], "correct": "Johannes Kepler" }
        ]
    },
    "Science: Computers": {
        "easy": [
            { "question": "Apa kepanjangan dari CPU?", "options": ["Central Processing Unit", "Central Process Unit", "Computer Personal Unit", "Central Peripheral Unit"], "correct": "Central Processing Unit" },
            { "question": "Apa fungsi utama dari RAM?", "options": ["Menyimpan data secara permanen", "Meningkatkan kecepatan internet", "Menyimpan data sementara", "Memproses grafik"], "correct": "Menyimpan data sementara" },
            { "question": "Apa kepanjangan dari ROM?", "options": ["Read Only Memory", "Random Only Memory", "Read Over Memory", "Run Other Memory"], "correct": "Read Only Memory" },
            { "question": "Perangkat lunak yang digunakan untuk mengakses internet disebut?", "options": ["Browser", "Antivirus", "Spreadsheet", "Compiler"], "correct": "Browser" },
            { "question": "Apa fungsi utama dari sistem operasi?", "options": ["Mengelola perangkat keras dan perangkat lunak", "Menjalankan aplikasi perkantoran", "Mempercepat koneksi internet", "Menampilkan gambar"], "correct": "Mengelola perangkat keras dan perangkat lunak" },
            { "question": "Jenis kabel yang umum digunakan untuk jaringan komputer adalah?", "options": ["HDMI", "USB", "Ethernet", "VGA"], "correct": "Ethernet" },
            { "question": "Apa singkatan dari HTML?", "options": ["Hyper Text Markup Language", "High Tech Modern Language", "Hyperlink and Text Management Language", "Hyper Tool Multi Language"], "correct": "Hyper Text Markup Language" },
            { "question": "Apa kegunaan utama dari Microsoft Excel?", "options": ["Mengedit foto", "Mengolah angka dan data", "Membuat presentasi", "Mengelola email"], "correct": "Mengolah angka dan data" },
            { "question": "Apa nama sistem operasi yang dikembangkan oleh Microsoft?", "options": ["Linux", "Windows", "MacOS", "Android"], "correct": "Windows" },
            { "question": "Jenis penyimpanan yang menggunakan cakram magnetik disebut?", "options": ["SSD", "HDD", "RAM", "Flash Drive"], "correct": "HDD" },
            { "question": "Apa kepanjangan dari URL?", "options": ["Uniform Resource Locator", "Universal Resource Link", "Unique Resource Locator", "Unified Readable Link"], "correct": "Uniform Resource Locator" },
            { "question": "Perangkat yang digunakan untuk mencetak dokumen disebut?", "options": ["Scanner", "Monitor", "Printer", "Keyboard"], "correct": "Printer" },
            { "question": "Apa fungsi utama dari mouse?", "options": ["Menampilkan gambar", "Mengontrol pergerakan kursor", "Menyimpan data", "Memproses informasi"], "correct": "Mengontrol pergerakan kursor" },
            { "question": "Apa nama ikon tempat menyimpan file di desktop Windows?", "options": ["Recycle Bin", "My Computer", "Control Panel", "Task Manager"], "correct": "Recycle Bin" },
            { "question": "Apa kepanjangan dari PDF?", "options": ["Portable Document Format", "Printable Document File", "Public Data Folder", "Personal Document Form"], "correct": "Portable Document Format" },
            { "question": "Perangkat apa yang digunakan untuk memasukkan teks ke komputer?", "options": ["Monitor", "Mouse", "Keyboard", "Speaker"], "correct": "Keyboard" },
            { "question": "Software antivirus digunakan untuk?", "options": ["Meningkatkan kecepatan komputer", "Melindungi komputer dari malware", "Memperbaiki file yang rusak", "Menyambungkan komputer ke internet"], "correct": "Melindungi komputer dari malware" },
            { "question": "Apa fungsi dari Power Supply Unit (PSU)?", "options": ["Menghubungkan komputer ke internet", "Memberikan daya listrik ke komponen komputer", "Menyimpan data komputer", "Mengatur suara komputer"], "correct": "Memberikan daya listrik ke komponen komputer" },
            { "question": "Apa kepanjangan dari LAN?", "options": ["Local Area Network", "Large Access Node", "Linking Automated Network", "Local Automated Network"], "correct": "Local Area Network" }
        ],
        "medium": [
            { "question": "Bahasa pemrograman apa yang dibuat oleh Guido van Rossum?", "options": ["Java", "C++", "Python", "Ruby"], "correct": "Python" },
            { "question": "Apa kepanjangan dari SQL?", "options": ["Structured Query Language", "Simple Query Language", "Standard Query Logic", "Sequential Query List"], "correct": "Structured Query Language" },
            { "question": "Framework mana yang digunakan untuk pengembangan aplikasi web dengan Python?", "options": ["Django", "React", "Laravel", "Spring"], "correct": "Django" },
            { "question": "Apa kegunaan utama dari Git?", "options": ["Mengedit gambar", "Mengelola versi kode", "Mengembangkan game", "Mengelola basis data"], "correct": "Mengelola versi kode" },
            { "question": "Apa nama database yang dikembangkan oleh Oracle?", "options": ["MongoDB", "MySQL", "PostgreSQL", "SQLite"], "correct": "MySQL" },
            { "question": "Siapa pencipta bahasa pemrograman Java?", "options": ["Dennis Ritchie", "Bjarne Stroustrup", "James Gosling", "Guido van Rossum"], "correct": "James Gosling" },
            { "question": "Apa fungsi utama dari CSS dalam pengembangan web?", "options": ["Mengelola database", "Membuat desain halaman web", "Mengontrol server", "Menjalankan kode JavaScript"], "correct": "Membuat desain halaman web" },
            { "question": "Apa yang dimaksud dengan API?", "options": ["Application Programming Interface", "Advanced Programming Integration", "Automated Process Interface", "Application Processing Information"], "correct": "Application Programming Interface" },
            { "question": "Manakah yang merupakan library JavaScript untuk membangun antarmuka pengguna?", "options": ["Angular", "Laravel", "Django", "Spring"], "correct": "Angular" },
            { "question": "Bahasa pemrograman apa yang paling umum digunakan untuk pengembangan aplikasi Android?", "options": ["Swift", "Kotlin", "C#", "Ruby"], "correct": "Kotlin" },
            { "question": "Apa nama sistem operasi berbasis Linux yang populer untuk server?", "options": ["Windows", "Ubuntu", "MacOS", "ReactOS"], "correct": "Ubuntu" },
            { "question": "Manakah yang bukan merupakan tipe data dalam Python?", "options": ["String", "Float", "Boolean", "Character"], "correct": "Character" },
            { "question": "Siapa pencipta bahasa pemrograman C?", "options": ["Dennis Ritchie", "Ken Thompson", "Linus Torvalds", "Bjarne Stroustrup"], "correct": "Dennis Ritchie" },
            { "question": "Apa fungsi utama dari Docker?", "options": ["Mengelola basis data", "Membantu pengembangan UI/UX", "Membuat dan mengelola container aplikasi", "Mengontrol jaringan komputer"], "correct": "Membuat dan mengelola container aplikasi" },
            { "question": "Apa yang dimaksud dengan NoSQL?", "options": ["Basis data tanpa SQL", "Bahasa pemrograman baru", "Framework pengembangan web", "Metode pengujian perangkat lunak"], "correct": "Basis data tanpa SQL" },
            { "question": "Apa nama metode enkripsi yang sering digunakan untuk mengamankan komunikasi online?", "options": ["RSA", "JPEG", "MP4", "SVG"], "correct": "RSA" },
            { "question": "Bahasa pemrograman apa yang digunakan untuk mengembangkan aplikasi iOS?", "options": ["Java", "Kotlin", "Swift", "C#"], "correct": "Swift" },
            { "question": "Manakah dari berikut yang merupakan sistem kontrol versi terdistribusi?", "options": ["SVN", "Git", "Mercurial", "All of the above"], "correct": "All of the above" },
            { "question": "Apa fungsi utama dari JSON?", "options": ["Menyimpan dan bertukar data", "Membuat tampilan website", "Mengontrol server", "Mengelola basis data"], "correct": "Menyimpan dan bertukar data" }
        ],
                "hard": [
            { "question": "Apa nama komputer pertama yang pernah dibuat?", "options": ["ENIAC", "UNIVAC", "IBM 701", "Colossus"], "correct": "ENIAC" },
            { "question": "Siapa yang dikenal sebagai bapak komputer?", "options": ["Alan Turing", "Charles Babbage", "John von Neumann", "Bill Gates"], "correct": "Charles Babbage" },
            { "question": "Apa kepanjangan dari HTTP?", "options": ["HyperText Transfer Protocol", "Hyperlink Transmission Process", "Hyper Transfer Text Protocol", "Hyper Transfer Technology Protocol"], "correct": "HyperText Transfer Protocol" },
            { "question": "Siapa penemu algoritma RSA dalam kriptografi?", "options": ["Rivest, Shamir, dan Adleman", "Alan Turing", "Claude Shannon", "Whitfield Diffie dan Martin Hellman"], "correct": "Rivest, Shamir, dan Adleman" },
            { "question": "Pada tahun berapa bahasa pemrograman C pertama kali diperkenalkan?", "options": ["1969", "1972", "1978", "1983"], "correct": "1972" },
            { "question": "Apa kepanjangan dari ASCII?", "options": ["American Standard Code for Information Interchange", "Advanced System Code for Internet Integration", "Automated Standard Communication for Information Interface", "American System Code for International Interchange"], "correct": "American Standard Code for Information Interchange" },
            { "question": "Apa nama sistem operasi open-source yang dikembangkan oleh Linus Torvalds?", "options": ["Windows", "Linux", "Unix", "MacOS"], "correct": "Linux" },
            { "question": "Siapa yang mengembangkan konsep 'World Wide Web'?", "options": ["Vint Cerf", "Tim Berners-Lee", "Ray Tomlinson", "Marc Andreessen"], "correct": "Tim Berners-Lee" },
            { "question": "Arsitektur komputer modern berbasis konsep siapa?", "options": ["John von Neumann", "Alan Turing", "Claude Shannon", "Charles Babbage"], "correct": "John von Neumann" },
            { "question": "Manakah dari berikut ini yang merupakan bahasa pemrograman fungsional?", "options": ["Java", "Haskell", "Python", "C++"], "correct": "Haskell" },
            { "question": "Berapa panjang kunci enkripsi AES-256 dalam bit?", "options": ["128", "192", "256", "512"], "correct": "256" },
            { "question": "Apa kepanjangan dari VPN?", "options": ["Virtual Private Network", "Verified Personal Network", "Virtual Processing Node", "Variable Protocol Networking"], "correct": "Virtual Private Network" },
            { "question": "Protokol keamanan jaringan WPA digunakan untuk?", "options": ["WiFi", "Bluetooth", "Ethernet", "5G"], "correct": "WiFi" },
            { "question": "Manakah dari berikut ini yang bukan sistem berkas?", "options": ["NTFS", "FAT32", "EXT4", "HTTP"], "correct": "HTTP" },
            { "question": "Perintah apa yang digunakan untuk melihat isi direktori di Linux?", "options": ["ls", "dir", "cd", "pwd"], "correct": "ls" },
            { "question": "Siapa yang pertama kali mengembangkan konsep 'machine learning'?", "options": ["Alan Turing", "Arthur Samuel", "Geoffrey Hinton", "Yann LeCun"], "correct": "Arthur Samuel" },
            { "question": "Apa kepanjangan dari BIOS?", "options": ["Basic Input Output System", "Binary Integrated Operating System", "Basic Internal Operating Software", "Bootable Input Output Setup"], "correct": "Basic Input Output System" },
            { "question": "Dalam basis data, apa fungsi dari indeks?", "options": ["Meningkatkan kecepatan pencarian data", "Mengurangi ukuran tabel", "Meningkatkan keamanan data", "Memeriksa konsistensi data"], "correct": "Meningkatkan kecepatan pencarian data" },
            { "question": "Dalam sistem operasi, 'thrashing' terjadi ketika?", "options": ["CPU terlalu panas", "Hard drive rusak", "Memori terlalu sering melakukan swapping", "Jaringan terputus"], "correct": "Memori terlalu sering melakukan swapping" }
        ]
    },
    "Science: Mathematics": {
        "easy": [
            { "question": "Berapakah hasil dari 2 + 2?", "options": ["3", "4", "5", "6"], "correct": "4" },
            { "question": "Berapakah hasil dari 5 + 3?", "options": ["7", "8", "9", "10"], "correct": "8" },
            { "question": "Berapakah hasil dari 10 - 4?", "options": ["5", "6", "7", "8"], "correct": "6" },
            { "question": "Berapakah hasil dari 3 × 3?", "options": ["6", "8", "9", "12"], "correct": "9" },
            { "question": "Berapakah hasil dari 12 ÷ 4?", "options": ["2", "3", "4", "6"], "correct": "3" },
            { "question": "Jika sebuah jam menunjukkan pukul 3:00 dan diputar maju 2 jam, pukul berapakah sekarang?", "options": ["4:00", "5:00", "6:00", "7:00"], "correct": "5:00" },
            { "question": "Berapakah hasil dari 7 + 6?", "options": ["12", "13", "14", "15"], "correct": "13" },
            { "question": "Berapakah hasil dari 15 - 7?", "options": ["6", "7", "8", "9"], "correct": "8" },
            { "question": "Berapakah hasil dari 9 × 2?", "options": ["16", "17", "18", "19"], "correct": "18" },
            { "question": "Berapakah hasil dari 20 ÷ 5?", "options": ["2", "3", "4", "5"], "correct": "4" },
            { "question": "Jika ada 5 apel dan diberikan 2 kepada teman, berapa apel yang tersisa?", "options": ["2", "3", "4", "5"], "correct": "3" },
            { "question": "Jika hari ini adalah Senin, besok hari apa?", "options": ["Selasa", "Rabu", "Kamis", "Jumat"], "correct": "Selasa" },
            { "question": "Berapakah hasil dari 8 + 5?", "options": ["11", "12", "13", "14"], "correct": "13" },
            { "question": "Berapakah hasil dari 14 - 6?", "options": ["6", "7", "8", "9"], "correct": "8" },
            { "question": "Berapakah hasil dari 6 × 4?", "options": ["20", "22", "24", "26"], "correct": "24" },
            { "question": "Berapakah hasil dari 18 ÷ 3?", "options": ["5", "6", "7", "8"], "correct": "6" },
            { "question": "Jika sebuah segitiga memiliki tiga sisi, berapakah jumlah sisinya?", "options": ["2", "3", "4", "5"], "correct": "3" },
            { "question": "Berapakah hasil dari 11 + 9?", "options": ["18", "19", "20", "21"], "correct": "20" },
            { "question": "Berapakah hasil dari 16 - 8?", "options": ["6", "7", "8", "9"], "correct": "8" },
            { "question": "Berapakah hasil dari 5 × 5?", "options": ["20", "22", "24", "25"], "correct": "25" }
        ],

        "medium": [
            { "question": "Siapa yang menemukan hukum gravitasi?", "options": ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Nikola Tesla"], "correct": "Isaac Newton" },
            { "question": "Apa ibukota dari Jepang?", "options": ["Beijing", "Seoul", "Tokyo", "Bangkok"], "correct": "Tokyo" },
            { "question": "Apa nama benua terbesar di dunia?", "options": ["Eropa", "Amerika", "Afrika", "Asia"], "correct": "Asia" },
            { "question": "Siapa penemu bola lampu?", "options": ["Nikola Tesla", "Thomas Edison", "Alexander Graham Bell", "Isaac Newton"], "correct": "Thomas Edison" },
            { "question": "Unsur kimia apa yang memiliki simbol 'H'?", "options": ["Helium", "Hidrogen", "Hafnium", "Holmium"], "correct": "Hidrogen" },
            { "question": "Hewan apa yang dikenal sebagai raja hutan?", "options": ["Harimau", "Serigala", "Singa", "Macan"], "correct": "Singa" },
            { "question": "Manakah yang merupakan planet terbesar dalam tata surya?", "options": ["Bumi", "Mars", "Jupiter", "Saturnus"], "correct": "Jupiter" },
            { "question": "Siapa ilmuwan yang mengembangkan teori relativitas?", "options": ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Stephen Hawking"], "correct": "Albert Einstein" },
            { "question": "Apa nama alat yang digunakan untuk mengukur tekanan udara?", "options": ["Barometer", "Thermometer", "Hidrometer", "Seismograf"], "correct": "Barometer" },
            { "question": "Siapa penemu telepon?", "options": ["Nikola Tesla", "Thomas Edison", "Alexander Graham Bell", "Guglielmo Marconi"], "correct": "Alexander Graham Bell" },
            { "question": "Apa nama ibukota Australia?", "options": ["Sydney", "Melbourne", "Canberra", "Perth"], "correct": "Canberra" },
            { "question": "Apa kepanjangan dari CPU?", "options": ["Central Processing Unit", "Computer Personal Unit", "Central Peripheral Unit", "Central Process Unit"], "correct": "Central Processing Unit" },
            { "question": "Apa nama sungai terpanjang di dunia?", "options": ["Amazon", "Nile", "Yangtze", "Mississippi"], "correct": "Nile" },
            { "question": "Siapa penulis novel 'Harry Potter'?", "options": ["J.R.R. Tolkien", "J.K. Rowling", "Suzanne Collins", "George R.R. Martin"], "correct": "J.K. Rowling" },
            { "question": "Siapa penemu mesin cetak?", "options": ["Johannes Gutenberg", "Leonardo da Vinci", "Benjamin Franklin", "Thomas More"], "correct": "Johannes Gutenberg" },
            { "question": "Berapakah jumlah provinsi di Indonesia saat ini?", "options": ["32", "34", "37", "38"], "correct": "38" },
            { "question": "Siapa presiden pertama Indonesia?", "options": ["Soeharto", "Sukarno", "B.J. Habibie", "Megawati"], "correct": "Sukarno" },
            { "question": "Di negara mana Menara Eiffel berada?", "options": ["Italia", "Spanyol", "Perancis", "Jerman"], "correct": "Perancis" },
            { "question": "Apa nama samudra terbesar di dunia?", "options": ["Samudra Hindia", "Samudra Pasifik", "Samudra Atlantik", "Samudra Arktik"], "correct": "Samudra Pasifik" }
        ],
        "hard": [
            { "question": "Apa nama bilangan yang hanya bisa dibagi oleh 1 dan dirinya sendiri?", "options": ["Bilangan Prima", "Bilangan Komposit", "Bilangan Rasional", "Bilangan Irasional"], "correct": "Bilangan Prima" },
            { "question": "Siapa ilmuwan yang menemukan hukum termodinamika pertama?", "options": ["Isaac Newton", "Rudolf Clausius", "James Joule", "Albert Einstein"], "correct": "James Joule" },
            { "question": "Apa nama partikel yang menyusun inti atom bersama dengan proton?", "options": ["Elektron", "Foton", "Neutron", "Positron"], "correct": "Neutron" },
            { "question": "Siapa filsuf yang menulis 'The Republic'?", "options": ["Aristoteles", "Plato", "Socrates", "Pythagoras"], "correct": "Plato" },
            { "question": "Dalam teori relativitas, apa yang dianggap sebagai batas kecepatan tertinggi di alam semesta?", "options": ["Kecepatan suara", "Kecepatan gravitasi", "Kecepatan cahaya", "Kecepatan elektron"], "correct": "Kecepatan cahaya" },
            { "question": "Apa nama fenomena ketika cahaya berubah arah saat melewati medium yang berbeda?", "options": ["Refleksi", "Difraksi", "Interferensi", "Refraksi"], "correct": "Refraksi" },
            { "question": "Apa nama elemen dengan simbol 'W' dalam tabel periodik?", "options": ["Wolfram", "Tungsten", "Vanadium", "Iridium"], "correct": "Tungsten" },
            { "question": "Apa nama perjanjian yang mengakhiri Perang Dunia I?", "options": ["Perjanjian Versailles", "Perjanjian Tordesillas", "Perjanjian Westfalen", "Perjanjian Paris"], "correct": "Perjanjian Versailles" },
            { "question": "Siapa ilmuwan yang menemukan hukum gerak planet?", "options": ["Isaac Newton", "Galileo Galilei", "Johannes Kepler", "Tycho Brahe"], "correct": "Johannes Kepler" },
            { "question": "Apa nama teori yang menjelaskan asal mula alam semesta?", "options": ["Teori Evolusi", "Teori Big Bang", "Teori Relativitas", "Teori Kuantum"], "correct": "Teori Big Bang" },
            { "question": "Siapa penulis buku 'Das Kapital' yang menjadi dasar teori komunisme?", "options": ["Karl Marx", "Friedrich Engels", "Vladimir Lenin", "Joseph Stalin"], "correct": "Karl Marx" },
            { "question": "Apa nama bangunan kuno yang menjadi makam Firaun Mesir?", "options": ["Colosseum", "Piramida Giza", "Taj Mahal", "Stonehenge"], "correct": "Piramida Giza" },
            { "question": "Siapa pelukis terkenal yang membuat lukisan 'The Starry Night'?", "options": ["Pablo Picasso", "Claude Monet", "Vincent van Gogh", "Leonardo da Vinci"], "correct": "Vincent van Gogh" },
            { "question": "Apa nama algoritma yang digunakan untuk enkripsi modern?", "options": ["SHA-256", "RSA", "AES", "Blowfish"], "correct": "AES" },
            { "question": "Apa nama sel terbesar dalam tubuh manusia?", "options": ["Neuron", "Sel darah merah", "Sel telur", "Hepatosit"], "correct": "Sel telur" },
            { "question": "Apa nama gurun terbesar di dunia?", "options": ["Gurun Gobi", "Gurun Sahara", "Gurun Antartika", "Gurun Kalahari"], "correct": "Gurun Antartika" },
            { "question": "Siapa yang menemukan radiasi elektromagnetik?", "options": ["James Clerk Maxwell", "Nikola Tesla", "Wilhelm Röntgen", "Albert Einstein"], "correct": "James Clerk Maxwell" },
            { "question": "Dalam mekanika kuantum, prinsip yang menyatakan bahwa kita tidak bisa mengetahui posisi dan momentum partikel secara bersamaan disebut?", "options": ["Prinsip Relativitas", "Prinsip Ketidakpastian Heisenberg", "Prinsip Dualitas Gelombang-Partikel", "Prinsip Pauli"], "correct": "Prinsip Ketidakpastian Heisenberg" },
            { "question": "Di mana letak situs arkeologi kuno Angkor Wat?", "options": ["Thailand", "Kamboja", "Vietnam", "Laos"], "correct": "Kamboja" }
        ]
    },
    "Cartoon & Animations": {
        "easy": [
            { "question": "Siapa karakter utama dalam serial kartun 'SpongeBob SquarePants'?", "options": ["Patrick", "Squidward", "SpongeBob", "Mr. Krabs"], "correct": "SpongeBob" },
            { "question": "Siapakah sahabat terbaik SpongeBob?", "options": ["Squidward", "Sandy", "Patrick", "Plankton"], "correct": "Patrick" },
            { "question": "Apa nama restoran tempat SpongeBob bekerja?", "options": ["The Chum Bucket", "Crusty Burger", "Krusty Krab", "Good Burger"], "correct": "Krusty Krab" },
            { "question": "Siapa musuh utama Krusty Krab yang memiliki restoran saingan?", "options": ["Squidward", "Plankton", "Sandy", "Larry"], "correct": "Plankton" },
            { "question": "Di mana SpongeBob tinggal?", "options": ["Di dalam gua", "Di rumah batu", "Di rumah nanas", "Di kapal"], "correct": "Di rumah nanas" },
            { "question": "Siapa karakter utama dalam kartun 'Dora the Explorer'?", "options": ["Diego", "Dora", "Swiper", "Boots"], "correct": "Dora" },
            { "question": "Apa nama monyet sahabat Dora?", "options": ["Boots", "Swiper", "Benny", "Tico"], "correct": "Boots" },
            { "question": "Kalimat terkenal Swiper dalam 'Dora the Explorer' adalah?", "options": ["Swiper, no swiping!", "Let’s go!", "We did it!", "Hola, amigos!"], "correct": "Swiper, no swiping!" },
            { "question": "Apa nama anjing dalam kartun 'Blue’s Clues'?", "options": ["Max", "Charlie", "Blue", "Rocky"], "correct": "Blue" },
            { "question": "Siapakah pemilik anjing Blue di 'Blue’s Clues'?", "options": ["Josh", "Steve", "Kevin", "Tom"], "correct": "Steve" },
            { "question": "Dalam kartun 'Tom and Jerry', siapa yang merupakan tikus?", "options": ["Tom", "Jerry", "Spike", "Butch"], "correct": "Jerry" },
            { "question": "Apa warna tubuh Tom dalam kartun 'Tom and Jerry'?", "options": ["Putih", "Coklat", "Abu-abu", "Hitam"], "correct": "Abu-abu" },
            { "question": "Siapakah karakter utama dalam kartun 'Ben 10'?", "options": ["Gwen", "Kevin", "Ben", "Max"], "correct": "Ben" },
            { "question": "Apa nama alat yang digunakan Ben dalam 'Ben 10'?", "options": ["Omnitrix", "Tachyon", "Chrono Blaster", "Neutron Sphere"], "correct": "Omnitrix" },
            { "question": "Apa nama tikus koki dalam film 'Ratatouille'?", "options": ["Emile", "Linguini", "Remy", "Django"], "correct": "Remy" },
            { "question": "Siapakah pemilik rumah yang diterbangkan dengan balon dalam film 'Up'?", "options": ["Russell", "Ellie", "Carl", "Dug"], "correct": "Carl" },
            { "question": "Apa warna utama pakaian Mickey Mouse?", "options": ["Biru", "Kuning", "Merah", "Hijau"], "correct": "Merah" },
            { "question": "Siapa nama kucing yang menjadi sahabat Pinocchio?", "options": ["Figaro", "Lucifer", "Felix", "Garfield"], "correct": "Figaro" },
            { "question": "Dalam film 'Frozen', siapa saudara perempuan Elsa?", "options": ["Rapunzel", "Anna", "Ariel", "Belle"], "correct": "Anna" }
        ],
        "medium": [
            { "question": "Dari mana asal karakter Doraemon?", "options": ["Jepang", "Korea", "China", "Amerika"], "correct": "Jepang" },
            { "question": "Siapa penemu teori relativitas?", "options": ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"], "correct": "Albert Einstein" },
            { "question": "Hewan apa yang dikenal sebagai mamalia terbesar di dunia?", "options": ["Gajah", "Paus Biru", "Jerapah", "Beruang Kutub"], "correct": "Paus Biru" },
            { "question": "Apa nama alat musik tradisional Indonesia yang terdiri dari bilah kayu yang digetarkan?", "options": ["Gamelan", "Angklung", "Sasando", "Kolintang"], "correct": "Angklung" },
            { "question": "Siapa presiden pertama Amerika Serikat?", "options": ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "Theodore Roosevelt"], "correct": "George Washington" },
            { "question": "Gunung apa yang tertinggi di Indonesia?", "options": ["Gunung Merapi", "Gunung Rinjani", "Gunung Semeru", "Gunung Puncak Jaya"], "correct": "Gunung Puncak Jaya" },
            { "question": "Apa nama ibu kota Brasil?", "options": ["Rio de Janeiro", "Brasilia", "São Paulo", "Buenos Aires"], "correct": "Brasilia" },
            { "question": "Apa unsur kimia dengan simbol 'O'?", "options": ["Oksigen", "Osmium", "Oganesson", "Orangium"], "correct": "Oksigen" },
            { "question": "Apa nama satelit alami Bumi?", "options": ["Titan", "Europa", "Bulan", "Phobos"], "correct": "Bulan" },
            { "question": "Siapa yang menemukan telepon?", "options": ["Nikola Tesla", "Alexander Graham Bell", "Thomas Edison", "James Watt"], "correct": "Alexander Graham Bell" },
            { "question": "Berapakah jumlah warna dalam pelangi?", "options": ["5", "6", "7", "8"], "correct": "7" },
            { "question": "Siapa tokoh utama dalam film 'Titanic'?", "options": ["Jack & Rose", "Harry & Sally", "Romeo & Juliet", "Tom & Jerry"], "correct": "Jack & Rose" },
            { "question": "Apa nama negara dengan populasi terbanyak di dunia?", "options": ["India", "Amerika Serikat", "Cina", "Indonesia"], "correct": "Cina" },
            { "question": "Siapa yang menemukan bola lampu pijar?", "options": ["Nikola Tesla", "Thomas Edison", "Michael Faraday", "Isaac Newton"], "correct": "Thomas Edison" },
            { "question": "Berapakah jumlah provinsi di Indonesia saat ini?", "options": ["32", "34", "37", "38"], "correct": "38" },
            { "question": "Apa nama bangunan terkenal di India yang dibangun sebagai simbol cinta?", "options": ["Taj Mahal", "Angkor Wat", "Great Wall", "Colosseum"], "correct": "Taj Mahal" },
            { "question": "Siapa yang pertama kali mendarat di bulan?", "options": ["Buzz Aldrin", "Yuri Gagarin", "Neil Armstrong", "Michael Collins"], "correct": "Neil Armstrong" },
            { "question": "Apa alat musik khas Betawi yang sering dimainkan dalam kesenian Gambang Kromong?", "options": ["Angklung", "Gendang", "Gambang", "Kolintang"], "correct": "Gambang" },
            { "question": "Di negara mana Menara Pisa berada?", "options": ["Perancis", "Italia", "Spanyol", "Jerman"], "correct": "Italia" }
        ],
        "hard": [
            { "question": "Siapa pencipta karakter Mickey Mouse?", "options": ["Walt Disney", "Hanna-Barbera", "Osamu Tezuka", "Matt Groening"], "correct": "Walt Disney" },
            { "question": "Siapa ilmuwan yang mengembangkan teori mekanika kuantum dan persamaan gelombang?", "options": ["Werner Heisenberg", "Erwin Schrödinger", "Niels Bohr", "Max Planck"], "correct": "Erwin Schrödinger" },
            { "question": "Apa nama lukisan terkenal karya Leonardo da Vinci yang menggambarkan seorang wanita dengan senyuman misterius?", "options": ["The Starry Night", "The Scream", "Mona Lisa", "Girl with a Pearl Earring"], "correct": "Mona Lisa" },
            { "question": "Siapa penulis 'The Divine Comedy'?", "options": ["Dante Alighieri", "Geoffrey Chaucer", "Homer", "Virgil"], "correct": "Dante Alighieri" },
            { "question": "Apa nama partikel subatomik yang tidak memiliki muatan listrik?", "options": ["Elektron", "Proton", "Neutron", "Positron"], "correct": "Neutron" },
            { "question": "Siapa penjelajah yang pertama kali mengelilingi dunia?", "options": ["Christopher Columbus", "Marco Polo", "Ferdinand Magellan", "James Cook"], "correct": "Ferdinand Magellan" },
            { "question": "Apa nama teori yang menjelaskan bahwa alam semesta bermula dari ledakan besar?", "options": ["Teori Relativitas", "Teori Evolusi", "Teori Big Bang", "Teori Kuantum"], "correct": "Teori Big Bang" },
            { "question": "Apa nama kode mesin enkripsi yang digunakan oleh Jerman pada Perang Dunia II?", "options": ["Caesar Cipher", "Enigma", "Lorenz Cipher", "One-Time Pad"], "correct": "Enigma" },
            { "question": "Siapa yang menciptakan hukum gerak planet?", "options": ["Isaac Newton", "Johannes Kepler", "Galileo Galilei", "Tycho Brahe"], "correct": "Johannes Kepler" },
            { "question": "Dalam mitologi Yunani, siapa dewa yang memerintah di Olympus?", "options": ["Poseidon", "Hades", "Zeus", "Ares"], "correct": "Zeus" },
            { "question": "Apa nama bintang paling terang di langit malam setelah Matahari?", "options": ["Betelgeuse", "Sirius", "Vega", "Rigel"], "correct": "Sirius" },
            { "question": "Apa nama perang yang terjadi antara Inggris dan Prancis dari tahun 1337 hingga 1453?", "options": ["Perang Tiga Puluh Tahun", "Perang Seratus Tahun", "Perang Napoleon", "Perang Salib"], "correct": "Perang Seratus Tahun" },
            { "question": "Siapa komposer yang menciptakan 'Simfoni No. 9'?", "options": ["Wolfgang Amadeus Mozart", "Ludwig van Beethoven", "Johann Sebastian Bach", "Franz Schubert"], "correct": "Ludwig van Beethoven" },
            { "question": "Apa unsur kimia dengan nomor atom 79?", "options": ["Perak", "Emas", "Platina", "Tembaga"], "correct": "Emas" },
            { "question": "Siapa yang pertama kali mengusulkan model heliosentris dalam astronomi?", "options": ["Ptolemy", "Isaac Newton", "Nicolaus Copernicus", "Galileo Galilei"], "correct": "Nicolaus Copernicus" },
            { "question": "Apa nama mata uang resmi di Swiss?", "options": ["Euro", "Franc Swiss", "Mark Jerman", "Pound Sterling"], "correct": "Franc Swiss" },
            { "question": "Siapa penemu hukum elektromagnetisme yang mendasari teori gelombang elektromagnetik?", "options": ["Michael Faraday", "James Clerk Maxwell", "Nikola Tesla", "Hendrik Lorentz"], "correct": "James Clerk Maxwell" },
            { "question": "Apa nama tempat yang dikenal sebagai kota tertua di dunia yang masih dihuni?", "options": ["Roma", "Jerusalem", "Damaskus", "Athena"], "correct": "Damaskus" },
            { "question": "Apa nama gunung tertinggi di tata surya?", "options": ["Gunung Everest", "Olympus Mons", "Mauna Kea", "Valles Marineris"], "correct": "Olympus Mons" }
        ]
    }
};


function getQuestions(category, difficulty) {
    return quizData[category] && quizData[category][difficulty] ? quizData[category][difficulty] : [];
}


// event listeners
function eventListeners(){
    _checkBtn.addEventListener('click', checkAnswer);
    _playAgainBtn.addEventListener('click', restartQuiz);
}

document.addEventListener('DOMContentLoaded', function(){
    loadQuestion();
    eventListeners();
    _totalQuestion.textContent = totalQuestion;
    _correctScore.textContent = correctScore;
});


// display question and options
function showQuestion(data) {
    _checkBtn.disabled = false;
    correctAnswer = data.correct;
    let optionsList = [...data.options];

    _question.innerHTML = `${data.question}`;
    _options.innerHTML = `
        ${optionsList.map((option, index) => `
            <li> ${index + 1}. <span>${option}</span> </li>
        `).join('')}
    `;
    selectOption();
}


// options selection
function selectOption(){
    _options.querySelectorAll('li').forEach(function(option){
        option.addEventListener('click', function(){
            if(_options.querySelector('.selected')){
                const activeOption = _options.querySelector('.selected');
                activeOption.classList.remove('selected');
            }
            option.classList.add('selected');
        });
    });
}

// answer checking
function checkAnswer(){
    _checkBtn.disabled = true;
    if(_options.querySelector('.selected')){
        let selectedAnswer = _options.querySelector('.selected span').textContent;
        if(selectedAnswer == HTMLDecode(correctAnswer)){
            correctScore++;
            _result.innerHTML = `<p><i class = "fas fa-check"></i>Correct Answer!</p>`;
        } else {
            _result.innerHTML = `<p><i class = "fas fa-times"></i>Incorrect Answer!</p> <small><b>Correct Answer: </b>${correctAnswer}</small>`;
        }
        checkCount();
    } else {
        _result.innerHTML = `<p><i class = "fas fa-question"></i>Please select an option!</p>`;
        _checkBtn.disabled = false;
    }
}

// to convert html entities into normal text of correct answer if there is any
function HTMLDecode(textString) {
    let doc = new DOMParser().parseFromString(textString, "text/html");
    return doc.documentElement.textContent;
}


function checkCount(){
    askedCount++;
    setCount();
    const settings = loadSettings();
    const questions = getQuestions(settings.category, settings.difficulty);

    if(askedCount == questions.length){
        setTimeout(function(){
            console.log("");
        }, 5000);

        _result.innerHTML += `<p>Your score is ${correctScore}.</p>`;
        _playAgainBtn.style.display = "block";
        _checkBtn.style.display = "none";
    } else {
        setTimeout(function(){
            showQuestion(questions[askedCount]);
        }, 1000);
    }
}


function setCount(){
    _totalQuestion.textContent = totalQuestion;
    _correctScore.textContent = correctScore;
}


function restartQuiz(){
    correctScore = askedCount = 0;
    _playAgainBtn.style.display = "none";
    _checkBtn.style.display = "block";
    _checkBtn.disabled = false;
    setCount();
    window.location.href = "index.html";
}

if(start_quiz_btn !== null) {
    start_quiz_btn.addEventListener('click', (e) => {
        setUpSettings();
        if (category === 'Select Category' || limit === 'Select number of questions' || difficulty === '') {
            alert('Please select all the fields');
        } else {
            saveSettings();
            setTimeout(() => {
                window.location.href = 'quiz.html';
            }, 300);
        }
    });
}


//function to get the difficulty
function getDifficulty() {
    for (let i = 0; i < quiz_difficulty.length; i++) {
        if (quiz_difficulty[i].checked) {
            return quiz_difficulty[i].value;
        }
    }
}

//function to set the settings
function setUpSettings() {
    category = quiz_category.value;
    limit = quiz_limit.value;
    difficulty = getDifficulty();
}

//save settings to local storage
function saveSettings() {
    localStorage.setItem('category', category);
    localStorage.setItem('limit', limit);
    localStorage.setItem('difficulty', difficulty);
}

//load settings from local storage
function loadSettings() {
    let settings = {};
    if (localStorage.getItem('category') !== null) {
        settings.category = localStorage.getItem('category');
    }
    if (localStorage.getItem('limit') !== null) {
        settings.limit = localStorage.getItem('limit');
    }
    if (localStorage.getItem('difficulty') !== null) {
        settings.difficulty = localStorage.getItem('difficulty');
    }
    return settings;
}