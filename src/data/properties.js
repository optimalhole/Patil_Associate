const u = (id, w = 1000) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`

export const IMG = {
  hero: u('photo-1600607687939-ce8a6c25118c', 2000),
  about: u('photo-1600566753086-00f18fb6b3ea', 1200),
  cta: u('photo-1600585154340-be6161a56a0c', 1600),
}

export const initialProperties = [
  { id: 1, title: 'The Courtyard Residence', place: 'Pune, Maharashtra', type: 'sale', price: '₹ 1.25 Cr', spec: '3 BHK · 1,450 sq.ft.', img: u('photo-1600607687939-ce8a6c25118c') },
  { id: 2, title: 'Greenview Land', place: 'Pune outskirts', type: 'plot', price: '₹ 48 Lakh', spec: '2,000 sq.ft. · NA Plot', img: u('photo-1500382017468-9049fed747ef') },
  { id: 3, title: 'The Urban Suite', place: 'Baner, Pune', type: 'rent', price: '₹ 35,000 / mo', spec: '2 BHK · Furnished', img: u('photo-1600210492486-724fe5c67fb0') },
  { id: 4, title: 'Corner Business Space', place: 'Wakad, Pune', type: 'commercial', price: '₹ 95 Lakh', spec: 'Shop · 850 sq.ft.', img: u('photo-1497366754035-f200968a6e72') },
  { id: 5, title: 'Horizon Villa', place: 'Pimpri-Chinchwad', type: 'sale', price: '₹ 2.1 Cr', spec: '4 BHK · 2,600 sq.ft.', img: u('photo-1600566753190-17f0baa2a6c3') },
  { id: 6, title: 'Open Land Parcel', place: 'Moshi, Pune', type: 'plot', price: 'On request', spec: '1,800 sq.ft. · Plot', img: u('photo-1449158743715-0a90ebb6d2d8') },
]

export const initialVideos = [
  { id: 1, title: 'A home worth coming back to', url: '', poster: u('photo-1600607687920-4e2a09cf159d', 800) },
  { id: 2, title: 'Discover your next address', url: '', poster: u('photo-1600607687939-ce8a6c25118c', 800) },
  { id: 3, title: 'Spaces made for living', url: '', poster: u('photo-1600566753190-17f0baa2a6c3', 800) },
]

export const TYPES = ['sale', 'rent', 'plot', 'commercial']
