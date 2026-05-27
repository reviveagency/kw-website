// Central source of truth for outbound CTAs.
// Update these when KIRO confirms final destinations.
export const LINKS = {
  // Replace with KIRO's real booking/calendar system or custom booking flow.
  booking: "https://calendly.com/kiro-karting/marcar-sessao",

  // Real KIRO contact channel.
  whatsapp: "https://wa.me/351936124682",
  phone: "tel:+351936124682",
  phoneDisplay: "+351 936 124 682",

  // Apex Timing live data feed.
  liveTiming: "https://live.apex-timing.com/kiro/?language=pt&iframe_id=axiframe_0",

  // Google Maps — venue pin and reviews.
  maps: "https://www.google.com/maps/place/KIRO+-+Karting+International+West+Region+-+ITD,+Lda./@39.2661794,-9.190134,750m/data=!3m1!1e3!4m6!3m5!1s0xd18caed74aaca0f:0x5ed061ede8fc978b!8m2!3d39.266304!4d-9.1884174!16s%2Fg%2F11b7fhfmbr",
  reviews: "https://www.google.com/maps/place/KIRO+-+Karting+International+West+Region+-+ITD,+Lda./@39.2659035,-9.1924988,3000m/data=!3m1!1e3!4m8!3m7!1s0xd18caed74aaca0f:0x5ed061ede8fc978b!8m2!3d39.266304!4d-9.1884174!9m1!1b1!16s%2Fg%2F11b7fhfmbr",

  // Replace with ecommerce checkout or voucher purchase flow.
  voucher: "https://calendly.com/kiro-karting/marcar-sessao",
} as const;
