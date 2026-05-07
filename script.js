const categories = [
  {
    id: "all",
    name: "All Pets",
    detail: "Food, toys, care, and daily essentials",
    bg: "linear-gradient(135deg, #dff6f2, #fff2cf)",
    accent: "#275948",
  },
  {
    id: "dog",
    name: "Dog",
    detail: "Meals, chews, leashes, and outdoor gear",
    bg: "linear-gradient(135deg, #e8f3ff, #fff1e8)",
    accent: "#f26b5b",
  },
  {
    id: "cat",
    name: "Cat",
    detail: "Litter, scratchers, treats, and cozy beds",
    bg: "linear-gradient(135deg, #f2ecff, #e9f8ec)",
    accent: "#6aa84f",
  },
  {
    id: "small",
    name: "Small Pets",
    detail: "Habitat care, hay, snacks, and enrichment",
    bg: "linear-gradient(135deg, #fff6dc, #e5f7f6)",
    accent: "#d99d20",
  },
];

const products = [
  {
    id: "kibble",
    name: "Leap & Leash Chicken Kibble",
    category: "dog",
    price: 28,
    meta: "Chicken and sweet potato recipe, 4 lb",
    description:
      "A complete everyday kibble made for steady energy, healthy coats, and simple mealtime routines. The smaller 4 lb bag is easy to store and ideal for trying a new recipe before committing to a larger size.",
    image: "assets/product-dog-food-photo.png",
    bg: "linear-gradient(135deg, #e5f7f6, #fff1dc)",
    accent: "#275948",
  },
  {
    id: "cat-tree",
    name: "Window Perch Cat Tree",
    category: "cat",
    price: 64,
    meta: "Compact scratch tower with nap shelf",
    description:
      "A space-friendly cat tree with sisal posts for scratching and raised perches for watching the room. The soft surfaces make it comfortable for naps while keeping the footprint practical for apartments.",
    image: "assets/product-cat-tree-photo.png",
    bg: "linear-gradient(135deg, #eee7ff, #f7f3df)",
    accent: "#6d62b6",
  },
  {
    id: "rope",
    name: "Tough Loop Rope Toy",
    category: "dog",
    price: 14,
    meta: "Braided cotton with reinforced handle",
    description:
      "A durable rope toy designed for tug, fetch, and everyday chewing. The loop shape is easy to grip, while the braided cotton texture helps keep play sessions engaging.",
    image: "assets/product-rope-photo.png",
    bg: "linear-gradient(135deg, #ffe7df, #e5f7f6)",
    accent: "#f26b5b",
  },
  {
    id: "litter",
    name: "Low-Track Cloud Litter",
    category: "cat",
    price: 22,
    meta: "Unscented clumping litter, 18 lb",
    description:
      "An unscented clumping litter made for low dust and easier daily scooping. It is a practical choice for indoor cats and households that prefer simple odor control without added fragrance.",
    image: "assets/product-litter-photo.png",
    bg: "linear-gradient(135deg, #f3f7fa, #e8f3ff)",
    accent: "#4f8ba8",
  },
  {
    id: "hay",
    name: "Orchard Grass Hay Box",
    category: "small",
    price: 18,
    meta: "Hand-packed hay for rabbits and guinea pigs",
    description:
      "A fresh orchard grass hay box for rabbits, guinea pigs, and other small pets. The loose-packed format makes it easy to portion into habitats while supporting healthy chewing and daily enrichment.",
    image: "assets/product-hay-photo.png",
    bg: "linear-gradient(135deg, #edf6df, #fff6dc)",
    accent: "#6aa84f",
  },
  {
    id: "shampoo",
    name: "Oat & Aloe Wash",
    category: "dog",
    price: 16,
    meta: "Gentle shampoo for sensitive coats",
    description:
      "A gentle wash for dogs with sensitive skin and everyday coat care needs. Oat and aloe ingredients help the bath feel soothing while leaving the coat clean without a heavy scent.",
    image: "assets/product-shampoo-photo.png",
    bg: "linear-gradient(135deg, #e5f7f6, #fff)",
    accent: "#275948",
  },
  {
    id: "treats",
    name: "Tuna Snap Treats",
    category: "cat",
    price: 9,
    meta: "Protein-rich bite-size rewards",
    description:
      "Small tuna treats made for quick rewards, training moments, or a little between-meal excitement. The bite-size pieces are easy to portion and keep fresh in the resealable pouch.",
    image: "assets/product-treats-photo.png",
    bg: "linear-gradient(135deg, #fff1dc, #e8f3ff)",
    accent: "#d99d20",
  },
  {
    id: "hideout",
    name: "Willow Nest Hideout",
    category: "small",
    price: 24,
    meta: "Chew-safe hideaway for small companions",
    description:
      "A woven willow hideout that gives small pets a cozy place to rest, explore, and nibble. The open arch makes it easy to place in a habitat while keeping the look natural and tidy.",
    image: "assets/product-hideout-photo.png",
    bg: "linear-gradient(135deg, #f7f3df, #edf6df)",
    accent: "#a37138",
  },
];

const productGrid = document.querySelector("#productGrid");
const heroSection = document.querySelector("#heroSection");
const storefrontView = document.querySelector("#storefrontView");
const faqPage = document.querySelector("#faqPage");
const returnsPage = document.querySelector("#returnsPage");
const returnForm = document.querySelector("#returnForm");
const returnOrderNumber = document.querySelector("#returnOrderNumber");
const returnMessage = document.querySelector("#returnMessage");
const returnDetails = document.querySelector("#returnDetails");
const categoryFilter = document.querySelector("#categoryFilter");
const sortSelect = document.querySelector("#sortSelect");
const searchInput = document.querySelector("#searchInput");
const productEyebrow = document.querySelector("#productEyebrow");
const cartButton = document.querySelector("#cartButton");
const closeCart = document.querySelector("#closeCart");
const cartDrawer = document.querySelector("#cartDrawer");
const cartItems = document.querySelector("#cartItems");
const cartCount = document.querySelector("#cartCount");
const cartTotal = document.querySelector("#cartTotal");
const accountButton = document.querySelector("#accountButton");
const accountMenu = document.querySelector("#accountMenu");
const accountPage = document.querySelector("#accountPage");
const accountTitle = document.querySelector("#accountTitle");
const accountSidebar = document.querySelector("#accountSidebar");
const accountContent = document.querySelector("#accountContent");
const accountBackButton = document.querySelector("#accountBackButton");
const logoutButton = document.querySelector("#logoutButton");
const authModal = document.querySelector("#authModal");
const closeAuth = document.querySelector("#closeAuth");
const signInTab = document.querySelector("#signInTab");
const registerTab = document.querySelector("#registerTab");
const authForm = document.querySelector("#authForm");
const authNameField = document.querySelector("#authNameField");
const authName = document.querySelector("#authName");
const authEmail = document.querySelector("#authEmail");
const authPassword = document.querySelector("#authPassword");
const authMessage = document.querySelector("#authMessage");
const authSubmit = document.querySelector("#authSubmit");
const productModal = document.querySelector("#productModal");
const closeProductModal = document.querySelector("#closeProductModal");
const productDialogContent = document.querySelector("#productDialogContent");
const checkoutButton = document.querySelector("#checkoutButton");
const checkoutModal = document.querySelector("#checkoutModal");
const closeCheckout = document.querySelector("#closeCheckout");
const checkoutForm = document.querySelector("#checkoutForm");
const addressStep = document.querySelector("#addressStep");
const paymentStep = document.querySelector("#paymentStep");
const reviewStep = document.querySelector("#reviewStep");
const continueToPayment = document.querySelector("#continueToPayment");
const backToAddress = document.querySelector("#backToAddress");
const continueToReview = document.querySelector("#continueToReview");
const backToPayment = document.querySelector("#backToPayment");
const checkoutReviewSummary = document.querySelector("#checkoutReviewSummary");
const checkoutMessage = document.querySelector("#checkoutMessage");
const checkoutTitle = document.querySelector("#checkoutTitle");
const checkoutSuccess = document.querySelector("#checkoutSuccess");
const checkoutSummaryCard = document.querySelector(".checkout-summary-card");
const checkoutSummaryItems = document.querySelector("#checkoutSummaryItems");
const checkoutSummaryTotals = document.querySelector("#checkoutSummaryTotals");
const successSummary = document.querySelector("#successSummary");
const finishOrder = document.querySelector("#finishOrder");
const customerName = document.querySelector("#customerName");
const customerEmail = document.querySelector("#customerEmail");
const savedAddressField = document.querySelector("#savedAddressField");
const savedAddressSelect = document.querySelector("#savedAddressSelect");
const selectedAddressDisplay = document.querySelector("#selectedAddressDisplay");
const addressFields = document.querySelector("#addressFields");
const customerStreet = document.querySelector("#customerStreet");
const customerZip = document.querySelector("#customerZip");
const customerCity = document.querySelector("#customerCity");
const customerCountry = document.querySelector("#customerCountry");
const addressSuggestions = document.querySelector("#addressSuggestions");
const dateField = document.querySelector(".date-field");
const deliveryDate = document.querySelector("#deliveryDate");

const autocompleteAddresses = [
  {
    street: "1187 Willow Bark Avenue",
    zip: "98103",
    city: "Seattle",
    country: "United States",
  },
  {
    street: "42 Parkside Mews",
    zip: "10024",
    city: "New York",
    country: "United States",
  },
  {
    street: "7308 Sunnybrook Drive",
    zip: "60614",
    city: "Chicago",
    country: "United States",
  },
  {
    street: "15 Laurel Green",
    zip: "SW1A 1AA",
    city: "London",
    country: "United Kingdom",
  },
  {
    street: "8 Kottbusser Damm",
    zip: "10967",
    city: "Berlin",
    country: "Germany",
  },
];

const FREE_SHIPPING_THRESHOLD = 50;
const STANDARD_SHIPPING = 4.99;

const demoUsers = [
  {
    name: "Emma Carter",
    label: "New Customer",
    email: "emma.carter@example.com",
    password: "Welcome123!",
    discount: 0,
    addresses: [
      {
        name: "Emma Carter",
        street: "1840 Linden Street",
        zip: "97205",
        city: "Portland",
        country: "United States",
      },
    ],
    orders: [
      { number: "TT-184215", date: "Apr 18", total: 42.0, status: "Delivered" },
      { number: "TT-173902", date: "Mar 29", total: 28.0, status: "Delivered" },
    ],
  },
  {
    name: "Daniel Hughes",
    label: "VIP Customer",
    email: "daniel.hughes@example.com",
    password: "Loyalty123!",
    discount: 0.1,
    addresses: [
      {
        name: "Daniel Hughes",
        street: "905 Maple Ridge Lane",
        zip: "78703",
        city: "Austin",
        country: "United States",
      },
      {
        name: "Daniel Hughes",
        street: "22 Harbor View Apt 4B",
        zip: "33602",
        city: "Tampa",
        country: "United States",
      },
    ],
    orders: [
      { number: "TT-215884", date: "Apr 26", total: 77.39, status: "Out for delivery" },
      { number: "TT-203641", date: "Apr 03", total: 51.3, status: "Delivered" },
    ],
  },
  {
    name: "Olivia Martin",
    label: "Admin",
    email: "olivia.admin@example.com",
    password: "Admin123!",
    role: "admin",
    discount: 0,
    addresses: [],
    orders: [],
  },
];

const additionalDemoOrders = [
  { number: "TT-590768", date: "May 06", customer: "Maya Brooks", email: "maya.brooks@example.com", address: "44 Cedar Point Road, 02118 Boston, United States", status: "Processing", payment: "Demo card ending in 4242", total: 68.47 },
  { number: "TT-589412", date: "May 05", customer: "Noah Patel", email: "noah.patel@example.com", address: "718 West Olive Street, 94110 San Francisco, United States", status: "Packed", payment: "PayPal demo", total: 34.98 },
  { number: "TT-588903", date: "May 04", customer: "Avery Kim", email: "avery.kim@example.com", address: "1299 Lakeview Drive, 60614 Chicago, United States", status: "Out for delivery", payment: "Demo card ending in 4242", total: 91.25 },
  { number: "TT-587644", date: "May 03", customer: "Lucas Bennett", email: "lucas.bennett@example.com", address: "605 Pine Hollow Lane, 98109 Seattle, United States", status: "Delivered", payment: "Demo card ending in 4242", total: 22.49 },
  { number: "TT-586732", date: "May 02", customer: "Sofia Alvarez", email: "sofia.alvarez@example.com", address: "882 Gardenia Court, 33133 Miami, United States", status: "Processing", payment: "PayPal demo", total: 57.92 },
  { number: "TT-585219", date: "May 01", customer: "Ethan Wright", email: "ethan.wright@example.com", address: "230 North Birch Avenue, 80203 Denver, United States", status: "Cancelled", payment: "Demo card ending in 4242", total: 19.99 },
  { number: "TT-584801", date: "Apr 30", customer: "Harper Scott", email: "harper.scott@example.com", address: "54 Magnolia Place, 37203 Nashville, United States", status: "Delivered", payment: "Demo card ending in 4242", total: 73.16 },
  { number: "TT-583672", date: "Apr 29", customer: "Liam Morgan", email: "liam.morgan@example.com", address: "4019 Ridgecrest Way, 85004 Phoenix, United States", status: "Packed", payment: "PayPal demo", total: 46.38 },
  { number: "TT-582445", date: "Apr 28", customer: "Chloe Turner", email: "chloe.turner@example.com", address: "903 Meadow Brook Road, 55402 Minneapolis, United States", status: "Delivered", payment: "Demo card ending in 4242", total: 115.7 },
  { number: "TT-581936", date: "Apr 27", customer: "Mason Reed", email: "mason.reed@example.com", address: "77 South Elm Street, 28202 Charlotte, United States", status: "Out for delivery", payment: "Demo card ending in 4242", total: 39.45 },
  { number: "TT-580744", date: "Apr 26", customer: "Isabella Young", email: "isabella.young@example.com", address: "1420 Summit Avenue, 97209 Portland, United States", status: "Delivered", payment: "PayPal demo", total: 84.63 },
  { number: "TT-579508", date: "Apr 25", customer: "Jackson Hall", email: "jackson.hall@example.com", address: "510 Bayberry Lane, 19103 Philadelphia, United States", status: "Processing", payment: "Demo card ending in 4242", total: 27.5 },
  { number: "TT-578419", date: "Apr 24", customer: "Grace Nelson", email: "grace.nelson@example.com", address: "2815 Orange Grove Drive, 90039 Los Angeles, United States", status: "Delivered", payment: "Demo card ending in 4242", total: 62.84 },
  { number: "TT-577236", date: "Apr 23", customer: "Henry Carter", email: "henry.carter@example.com", address: "16 Franklin Terrace, 20002 Washington, United States", status: "Packed", payment: "PayPal demo", total: 49.77 },
  { number: "TT-576128", date: "Apr 22", customer: "Ella Foster", email: "ella.foster@example.com", address: "900 Riverbend Circle, 63108 St. Louis, United States", status: "Delivered", payment: "Demo card ending in 4242", total: 31.2 },
  { number: "TT-575902", date: "Apr 21", customer: "Benjamin Clark", email: "benjamin.clark@example.com", address: "707 Spruce Street, 15222 Pittsburgh, United States", status: "Cancelled", payment: "Demo card ending in 4242", total: 96.18 },
  { number: "TT-574613", date: "Apr 20", customer: "Mila Torres", email: "mila.torres@example.com", address: "118 Crescent Lane, 30308 Atlanta, United States", status: "Delivered", payment: "PayPal demo", total: 55.04 },
  { number: "TT-573884", date: "Apr 19", customer: "Logan Rivera", email: "logan.rivera@example.com", address: "635 Highland Park Road, 46204 Indianapolis, United States", status: "Out for delivery", payment: "Demo card ending in 4242", total: 71.33 },
  { number: "TT-572491", date: "Apr 18", customer: "Nora Evans", email: "nora.evans@example.com", address: "49 Pearl Street, 10013 New York, United States", status: "Delivered", payment: "Demo card ending in 4242", total: 43.28 },
  { number: "TT-571620", date: "Apr 17", customer: "Owen Murphy", email: "owen.murphy@example.com", address: "322 Oak Knoll Avenue, 78704 Austin, United States", status: "Processing", payment: "PayPal demo", total: 88.11 },
  { number: "TT-570537", date: "Apr 16", customer: "Amelia Cox", email: "amelia.cox@example.com", address: "1001 Brookside Drive, 64108 Kansas City, United States", status: "Delivered", payment: "Demo card ending in 4242", total: 25.99 },
  { number: "TT-569408", date: "Apr 15", customer: "Sebastian Price", email: "sebastian.price@example.com", address: "217 Willow Bend Road, 70115 New Orleans, United States", status: "Packed", payment: "Demo card ending in 4242", total: 64.72 },
  { number: "TT-568276", date: "Apr 14", customer: "Lily Sanders", email: "lily.sanders@example.com", address: "870 Market Lane, 92103 San Diego, United States", status: "Delivered", payment: "PayPal demo", total: 103.46 },
  { number: "TT-567135", date: "Apr 13", customer: "Caleb Morris", email: "caleb.morris@example.com", address: "39 Aspen Grove, 43215 Columbus, United States", status: "Delivered", payment: "Demo card ending in 4242", total: 38.69 },
  { number: "TT-566804", date: "Apr 12", customer: "Zoe Peterson", email: "zoe.peterson@example.com", address: "420 Sycamore Lane, 29403 Charleston, United States", status: "Processing", payment: "Demo card ending in 4242", total: 76.9 },
  { number: "TT-565771", date: "Apr 11", customer: "Julian Gray", email: "julian.gray@example.com", address: "1516 Forest Avenue, 97214 Portland, United States", status: "Delivered", payment: "PayPal demo", total: 52.1 },
  { number: "TT-564660", date: "Apr 10", customer: "Victoria James", email: "victoria.james@example.com", address: "720 East Maple Street, 60607 Chicago, United States", status: "Out for delivery", payment: "Demo card ending in 4242", total: 29.95 },
  { number: "TT-563548", date: "Apr 09", customer: "Isaac Wood", email: "isaac.wood@example.com", address: "905 Parkview Court, 32801 Orlando, United States", status: "Delivered", payment: "Demo card ending in 4242", total: 47.64 },
  { number: "TT-562337", date: "Apr 08", customer: "Ruby Coleman", email: "ruby.coleman@example.com", address: "63 Beacon Hill Road, 02108 Boston, United States", status: "Packed", payment: "PayPal demo", total: 66.52 },
  { number: "TT-561204", date: "Apr 07", customer: "Miles Henderson", email: "miles.henderson@example.com", address: "2400 Sunset Boulevard, 90026 Los Angeles, United States", status: "Delivered", payment: "Demo card ending in 4242", total: 93.07 },
];

let storeOrders = demoUsers
  .filter((user) => user.role !== "admin")
  .flatMap((user) =>
    (user.orders || []).map((order, index) => ({
      ...order,
      customer: user.name,
      email: user.email,
      status: order.status || (index === 0 ? "Processing" : "Delivered"),
      payment: user.discount ? "Demo card ending in 4242" : "PayPal demo",
      channel: "Demo store",
      address: formatAddress(user.addresses?.[0] || createEmptyAddress()),
    })),
  )
  .concat(additionalDemoOrders);

let activeCategory = "all";
let cart = {};
let currentUser = null;
let orderHistory = [];
let savedAddresses = [];
let activeAccountView = "profile";
let adminOrderSearchQuery = "";
let adminStatusFilter = "all";
let adminOrderPage = 1;
let authMode = "signin";
let checkoutDetails = {
  name: "",
  email: "",
  address: {
    name: "",
    street: "",
    zip: "",
    city: "",
    country: "",
  },
  payment: "Demo card ending in 4242",
  deliveryDate: "",
};
let activeCheckoutPanel = "address";

function currency(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return entities[char];
  });
}

function createEmptyAddress() {
  return {
    name: "",
    street: "",
    zip: "",
    city: "",
    country: "",
  };
}

function normalizeAddress(address = {}) {
  if (typeof address === "string") {
    return {
      name: "",
      street: address,
      zip: "",
      city: "",
      country: "",
    };
  }

  return {
    name: String(address.name ?? ""),
    street: String(address.street ?? ""),
    zip: String(address.zip ?? ""),
    city: String(address.city ?? ""),
    country: String(address.country ?? ""),
  };
}

function addressKey(address) {
  const normalized = normalizeAddress(address);
  return [normalized.name, normalized.street, normalized.zip, normalized.city, normalized.country]
    .map((part) => part.trim().toLowerCase())
    .join("|");
}

function isCompleteAddress(address) {
  const normalized = normalizeAddress(address);
  return Boolean(
    normalized.name.trim() &&
      normalized.street.trim() &&
      normalized.zip.trim() &&
      normalized.city.trim() &&
      normalized.country.trim(),
  );
}

function formatAddress(address, options = {}) {
  const normalized = normalizeAddress(address);
  const lines = [normalized.street, `${normalized.zip} ${normalized.city}`.trim(), normalized.country].filter(Boolean);
  if (options.includeName && normalized.name) lines.unshift(normalized.name);
  return lines
    .filter(Boolean)
    .join(", ");
}

function getAddressFromFields() {
  return {
    name: customerName.value.trim(),
    street: customerStreet.value.trim(),
    zip: customerZip.value.trim(),
    city: customerCity.value.trim(),
    country: customerCountry.value.trim(),
  };
}

function fillAddressFields(address) {
  const normalized = normalizeAddress(address);
  if (normalized.name) customerName.value = normalized.name;
  customerStreet.value = normalized.street;
  customerZip.value = normalized.zip;
  customerCity.value = normalized.city;
  customerCountry.value = normalized.country;
}

function formatDateInput(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function parseDemoOrderDate(value) {
  const date = new Date(`${value}, 2026 00:00:00`);
  return Number.isNaN(date.getTime()) ? null : date;
}

function formatDeliveryDate(value) {
  if (!value) return "No delivery date selected";
  const date = new Date(`${value}T00:00:00`);
  return new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

function configureDeliveryDate() {
  const min = new Date();
  min.setDate(min.getDate() + 3);
  const max = new Date();
  max.setFullYear(max.getFullYear() + 1);
  deliveryDate.min = formatDateInput(min);
  deliveryDate.max = formatDateInput(max);
  if (!deliveryDate.value || deliveryDate.value < deliveryDate.min || deliveryDate.value > deliveryDate.max) {
    deliveryDate.value = deliveryDate.min;
  }
}

function openDeliveryDatePicker() {
  deliveryDate.focus({ preventScroll: true });
  if (typeof deliveryDate.showPicker !== "function") return;
  try {
    deliveryDate.showPicker();
  } catch (error) {
    // Browsers may block showPicker unless it comes directly from a user action.
  }
}

function setAddressFieldsVisible(isVisible) {
  addressFields.hidden = !isVisible;
  [customerStreet, customerZip, customerCity, customerCountry].forEach((field) => {
    field.disabled = !isVisible;
  });
  if (!isVisible) hideAddressSuggestions();
}

function renderSelectedAddressDisplay(address) {
  const normalized = normalizeAddress(address);
  selectedAddressDisplay.hidden = false;
  selectedAddressDisplay.innerHTML = `
    <p>${escapeHtml(normalized.street)}</p>
    <p>${escapeHtml(`${normalized.zip} ${normalized.city}`.trim())}</p>
    <p>${escapeHtml(normalized.country)}</p>
  `;
}

function useSavedAddress(index) {
  const address = normalizeAddress(savedAddresses[index]);
  if (!address.street) return;
  customerName.value = address.name || customerName.value || currentUser?.name || "";
  fillAddressFields(address);
  renderSelectedAddressDisplay(address);
  setAddressFieldsVisible(false);
}

function useNewAddress() {
  selectedAddressDisplay.hidden = true;
  selectedAddressDisplay.innerHTML = "";
  fillAddressFields({
    ...createEmptyAddress(),
    name: customerName.value || currentUser?.name || "",
  });
  setAddressFieldsVisible(true);
}

function hideAddressSuggestions() {
  addressSuggestions.hidden = true;
  addressSuggestions.innerHTML = "";
  customerStreet.setAttribute("aria-expanded", "false");
}

function getAddressSuggestionMatches() {
  if (addressFields.hidden) return [];
  const query = customerStreet.value.trim().toLowerCase();
  if (!query) return [];

  const matches = autocompleteAddresses.filter((address) =>
    `${address.street} ${address.zip} ${address.city} ${address.country}`.toLowerCase().includes(query),
  );
  return matches.length ? matches : autocompleteAddresses;
}

function renderAddressSuggestions() {
  const matches = getAddressSuggestionMatches();
  if (!matches.length) {
    hideAddressSuggestions();
    return;
  }

  addressSuggestions.innerHTML = matches
    .map(
      (address, index) => `
        <button type="button" role="option" data-address-suggestion="${index}">
          <span>${escapeHtml(address.street)}</span>
          <small>${escapeHtml(`${address.zip} ${address.city}, ${address.country}`)}</small>
        </button>
      `,
    )
    .join("");
  addressSuggestions.hidden = false;
  customerStreet.setAttribute("aria-expanded", "true");
}

function selectAddressSuggestion(index) {
  const matches = getAddressSuggestionMatches();
  const address = matches[index];
  if (!address) return;

  if (!savedAddressField.hidden) savedAddressSelect.value = "new";
  fillAddressFields(address);
  hideAddressSuggestions();
  customerZip.focus();
}

function getCartEntries() {
  return Object.entries(cart)
    .map(([id, qty]) => {
      const product = products.find((item) => item.id === id);
      return product ? { ...product, qty, lineTotal: product.price * qty } : null;
    })
    .filter(Boolean);
}

function getOrderTotals() {
  const entries = getCartEntries();
  const subtotal = entries.reduce((sum, item) => sum + item.lineTotal, 0);
  const discount = currentUser?.discount ? subtotal * currentUser.discount : 0;
  const shippingBase = subtotal - discount;
  const shipping = shippingBase === 0 || shippingBase >= FREE_SHIPPING_THRESHOLD ? 0 : STANDARD_SHIPPING;
  return {
    entries,
    subtotal,
    discount,
    shippingBase,
    shipping,
    total: subtotal - discount + shipping,
  };
}

function getFilteredProducts() {
  const query = searchInput.value.trim().toLowerCase();
  const filtered = products.filter((product) => {
    const categoryMatch = activeCategory === "all" || product.category === activeCategory;
    const searchMatch = `${product.name} ${product.meta} ${product.category}`.toLowerCase().includes(query);
    return categoryMatch && searchMatch;
  });

  return filtered.sort((a, b) => {
    if (sortSelect.value === "price-low") return a.price - b.price;
    if (sortSelect.value === "price-high") return b.price - a.price;
    return products.indexOf(a) - products.indexOf(b);
  });
}

function renderProducts() {
  const visibleProducts = getFilteredProducts();
  const categoryName = categories.find((category) => category.id === activeCategory)?.name ?? "All Pets";
  productEyebrow.textContent = activeCategory === "all" ? "Shop" : `${categoryName} products`;

  productGrid.innerHTML =
    visibleProducts
      .map(
        (product) => {
          const qty = cart[product.id] || 0;
          const productActionAttributes = qty
            ? ""
            : `data-view-product="${product.id}" role="button" aria-haspopup="dialog" aria-controls="productModal" aria-label="View details for ${escapeHtml(product.name)}, ${currency(product.price)}" tabindex="0"`;
          return `
          <article class="product-card ${qty ? "in-cart" : ""}" ${productActionAttributes}>
            <div class="product-art ${product.image ? "has-image" : ""}" style="--product-bg: ${product.bg}; --category-accent: ${product.accent}">
              ${product.image ? `<img src="${product.image}" alt="${product.name}" loading="lazy" />` : ""}
            </div>
            <div>
              <h3>${product.name}</h3>
              <p class="product-meta">${product.meta}</p>
            </div>
            <div class="product-bottom">
              <span class="price">${currency(product.price)}</span>
              ${
                qty
                  ? `<div class="qty-control product-qty" aria-label="${product.name} quantity">
                      <button type="button" data-decrease="${product.id}">-</button>
                      <strong>${qty}</strong>
                      <button type="button" data-increase="${product.id}">+</button>
                    </div>`
                  : ""
              }
            </div>
          </article>
        `;
        },
      )
      .join("") || `<p class="empty-state">No products match that search.</p>`;
}

function openProductModal(productId) {
  const product = products.find((item) => item.id === productId);
  if (!product) return;

  productDialogContent.innerHTML = `
    <div class="product-dialog-grid">
      <div class="product-dialog-art">
        ${product.image ? `<img src="${product.image}" alt="${product.name}" />` : ""}
      </div>
      <div class="product-dialog-info">
        <h2 id="productDialogTitle">${product.name}</h2>
        <p>${product.description || product.meta}</p>
        <strong class="dialog-price">${currency(product.price)}</strong>
        <button class="button primary" type="button" data-product="${product.id}">Add to cart</button>
      </div>
    </div>
  `;
  productModal.classList.add("open");
  productModal.setAttribute("aria-hidden", "false");
  closeCartDrawer();
}

function closeProductDetails() {
  productModal.classList.remove("open");
  productModal.setAttribute("aria-hidden", "true");
}

function renderCart() {
  const { entries, subtotal, discount, shippingBase } = getOrderTotals();
  const itemCount = entries.reduce((sum, item) => sum + item.qty, 0);

  cartCount.textContent = itemCount;
  cartCount.classList.toggle("is-empty", itemCount === 0);
  cartTotal.innerHTML = `${renderFreeShippingHint(shippingBase, entries)}${renderPriceBreakdown(subtotal, discount)}`;
  checkoutButton.disabled = itemCount === 0;

  cartItems.innerHTML =
    entries
      .map(
        (product) => `
          <div class="cart-row">
            <div>
              <strong>${product.name}</strong>
              <span>${currency(product.price)} each</span>
            </div>
            <div class="qty-control" aria-label="${product.name} quantity">
              <button type="button" data-decrease="${product.id}">-</button>
              <strong>${product.qty}</strong>
              <button type="button" data-increase="${product.id}">+</button>
            </div>
          </div>
        `,
      )
      .join("") || `<p class="empty-state">Your cart is ready for treats, toys, and care picks.</p>`;

  if (!checkoutModal.hidden) renderCheckoutSummary();
}

function renderPriceBreakdown(subtotal, discount) {
  if (!discount) {
    return `
      <div class="total-row"><span>Subtotal</span><strong>${currency(subtotal)}</strong></div>
    `;
  }

  return `
    <div class="total-row original-total"><span>Original amount</span><strong>${currency(subtotal)}</strong></div>
    <div class="total-row discount-row"><span>VIP discount</span><strong>-${currency(discount)}</strong></div>
  `;
}

function renderFreeShippingHint(shippingBase, entries) {
  if (!entries.length || shippingBase <= 0 || shippingBase >= FREE_SHIPPING_THRESHOLD) return "";
  return `<p class="shipping-hint">Add ${currency(FREE_SHIPPING_THRESHOLD - shippingBase)} more for free shipping.</p>`;
}

function renderOrderSummary(target) {
  const { entries, subtotal, discount, shipping, total } = getOrderTotals();
  target.innerHTML = `
    ${renderPriceBreakdown(subtotal, discount)}
    <div class="total-row"><span>Shipping</span><strong>${shipping === 0 ? "Free" : currency(shipping)}</strong></div>
    <div class="total-row grand-total"><span>Total</span><strong>${currency(total)}</strong></div>
  `;
}

function renderCheckoutSummary() {
  const { entries } = getOrderTotals();
  checkoutSummaryItems.innerHTML = entries
    .map(
      (item) => `
        <div class="review-item">
          <span>${item.qty} x ${item.name}</span>
          <strong>${currency(item.lineTotal)}</strong>
        </div>
      `,
    )
    .join("");
  renderOrderSummary(checkoutSummaryTotals);
}

function getSelectedPaymentMethod() {
  return document.querySelector('input[name="paymentMethod"]:checked')?.value || "Demo card ending in 4242";
}

function getCheckoutAddress() {
  const name = customerName.value.trim();
  const usingSavedAddress = !savedAddressField.hidden && savedAddressSelect.value !== "new";
  return usingSavedAddress
    ? {
        ...normalizeAddress(savedAddresses[Number(savedAddressSelect.value)]),
        name,
      }
    : getAddressFromFields();
}

function validateAddressStep() {
  const name = customerName.value.trim();
  const email = customerEmail.value.trim();
  const address = getCheckoutAddress();

  if (!name || !email || !isCompleteAddress(address)) {
    checkoutMessage.textContent =
      "Please enter the recipient name, email address, street address, ZIP code, city, and country.";
    if (!name) customerName.focus();
    else if (!email) customerEmail.focus();
    else if (!address.street) customerStreet.focus();
    else if (!address.zip) customerZip.focus();
    else if (!address.city) customerCity.focus();
    else customerCountry.focus();
    return false;
  }

  checkoutMessage.textContent = "";
  return true;
}

function validatePaymentStep() {
  configureDeliveryDate();
  if (!deliveryDate.value || deliveryDate.value < deliveryDate.min || deliveryDate.value > deliveryDate.max) {
    checkoutMessage.textContent = "Please choose a preferred delivery date within the available range.";
    deliveryDate.focus();
    return false;
  }

  checkoutMessage.textContent = "";
  return true;
}

function syncCheckoutDetails() {
  checkoutDetails = {
    name: customerName.value.trim(),
    email: customerEmail.value.trim(),
    address: getCheckoutAddress(),
    payment: getSelectedPaymentMethod(),
    deliveryDate: deliveryDate.value,
  };
}

function renderCheckoutReviewSummary() {
  syncCheckoutDetails();
  checkoutReviewSummary.innerHTML = `
    <section class="review-detail-section" aria-label="Delivery details">
      <h3>Delivery</h3>
      <p>${escapeHtml(checkoutDetails.name)}</p>
      <p>${escapeHtml(checkoutDetails.email)}</p>
      <p>${escapeHtml(formatAddress(checkoutDetails.address))}</p>
      <p>${escapeHtml(formatDeliveryDate(checkoutDetails.deliveryDate))}</p>
    </section>
    <section class="review-detail-section" aria-label="Payment details">
      <h3>Payment</h3>
      <p>${escapeHtml(checkoutDetails.payment)}</p>
    </section>
  `;
}

function showCheckoutPanel(panel) {
  activeCheckoutPanel = panel;
  addressStep.hidden = panel !== "address";
  paymentStep.hidden = panel !== "payment";
  reviewStep.hidden = panel !== "review";
  checkoutMessage.textContent = "";
  document.querySelectorAll("[data-step-indicator]").forEach((indicator) => {
    indicator.classList.toggle("active", indicator.dataset.stepIndicator === panel);
  });
  if (panel === "review") renderCheckoutReviewSummary();
}

function showCheckoutStep(step) {
  checkoutModal.dataset.step = step;
  checkoutForm.hidden = step !== "details";
  checkoutSuccess.hidden = step !== "success";
  checkoutSummaryCard.hidden = step === "success";
  finishOrder.hidden = step !== "success";
  if (step === "details") checkoutMessage.textContent = "";

  if (step === "details") {
    checkoutTitle.textContent = "Checkout";
    showCheckoutPanel(activeCheckoutPanel || "address");
  }

  renderCheckoutSummary();
}

function openCheckout() {
  if (getOrderTotals().entries.length === 0) return;
  if (currentUser) {
    customerName.value = savedAddresses[0]?.name || currentUser.name;
    customerEmail.value = currentUser.email;
    customerName.disabled = false;
    customerEmail.disabled = true;
    renderCheckoutAddresses();
  } else {
    customerName.disabled = false;
    customerEmail.disabled = false;
    savedAddressField.hidden = true;
    selectedAddressDisplay.hidden = true;
    setAddressFieldsVisible(true);
  }
  storefrontView.hidden = true;
  heroSection.hidden = true;
  accountPage.hidden = true;
  faqPage.hidden = true;
  returnsPage.hidden = true;
  checkoutModal.hidden = false;
  checkoutModal.setAttribute("aria-hidden", "false");
  closeCartDrawer();
  activeCheckoutPanel = "address";
  configureDeliveryDate();
  showCheckoutStep("details");
  checkoutModal.scrollIntoView({ behavior: "smooth", block: "start" });
  customerName.focus({ preventScroll: true });
}

function renderCheckoutAddresses() {
  if (!currentUser || savedAddresses.length === 0) {
    savedAddressField.hidden = true;
    selectedAddressDisplay.hidden = true;
    useNewAddress();
    return;
  }

  savedAddressField.hidden = false;
  savedAddressSelect.innerHTML = `
    ${savedAddresses
      .map((address, index) => `<option value="${index}">${escapeHtml(formatAddress(address, { includeName: true }))}</option>`)
      .join("")}
    <option value="new">Enter a new address</option>
  `;
  savedAddressSelect.value = "0";
  useSavedAddress(0);
}

function closeCheckoutModal() {
  checkoutModal.hidden = true;
  checkoutModal.setAttribute("aria-hidden", "true");
  checkoutModal.dataset.step = "";
  hideAddressSuggestions();
  heroSection.hidden = false;
  storefrontView.hidden = false;
  customerName.disabled = false;
  customerEmail.disabled = false;
  storefrontView.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderSuccess() {
  const orderNumber = `TT-${Math.floor(100000 + Math.random() * 900000)}`;
  const { entries, subtotal, discount, shipping, total } = getOrderTotals();
  const name = escapeHtml(checkoutDetails.name) || "Guest customer";
  const email = escapeHtml(checkoutDetails.email) || "No email entered";
  const address = escapeHtml(formatAddress(checkoutDetails.address)) || "No address entered";
  const payment = escapeHtml(checkoutDetails.payment);
  const preferredDate = escapeHtml(formatDeliveryDate(checkoutDetails.deliveryDate));

  successSummary.innerHTML = `
    <div class="confirmation-meta">
      <div>
        <span>Order number</span>
        <strong>${orderNumber}</strong>
      </div>
      <div>
        <span>Est. delivery date</span>
        <strong>${preferredDate}</strong>
      </div>
    </div>
    <div class="confirmation-details">
      <div>
        <span>Email</span>
        <p>${email}</p>
      </div>
      <div>
        <span>Delivery address</span>
        <p>${name}<br />${address}</p>
      </div>
      <div>
        <span>Payment</span>
        <p>${payment}</p>
      </div>
    </div>
    <div class="success-items">
      ${entries
        .map(
          (item) => `
            <div class="review-item">
              <span>${item.qty} x ${item.name}</span>
              <strong>${currency(item.lineTotal)}</strong>
            </div>
          `,
        )
        .join("")}
    </div>
    ${renderPriceBreakdown(subtotal, discount)}
    <div class="total-row"><span>Shipping</span><strong>${shipping === 0 ? "Free" : currency(shipping)}</strong></div>
    <div class="total-row grand-total"><span>Total paid</span><strong>${currency(total)}</strong></div>
  `;

  storeOrders = [
    {
      number: orderNumber,
      date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric" }),
      total,
      customer: checkoutDetails.name || currentUser?.name || "Guest customer",
      email: checkoutDetails.email || currentUser?.email || "Guest checkout",
      address: formatAddress(checkoutDetails.address),
      payment: checkoutDetails.payment,
      status: "Processing",
      channel: "Checkout demo",
    },
    ...storeOrders,
  ];

  if (currentUser) {
    orderHistory = [
      {
        number: orderNumber,
        date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric" }),
        total,
        status: "Processing",
      },
      ...orderHistory,
    ].slice(0, 3);

    if (
      isCompleteAddress(checkoutDetails.address) &&
      !savedAddresses.some((address) => addressKey(address) === addressKey(checkoutDetails.address))
    ) {
      savedAddresses = [checkoutDetails.address, ...savedAddresses].slice(0, 2);
    }

    currentUser.orders = orderHistory;
    currentUser.addresses = savedAddresses;
    renderAccountMenu();
    if (!accountPage.hidden) renderAccountPage();
  }
}

function setAuthMode(mode) {
  authMode = mode;
  const isRegister = mode === "register";
  authNameField.hidden = !isRegister;
  authSubmit.textContent = isRegister ? "Create account" : "Sign in";
  signInTab.classList.toggle("active", !isRegister);
  registerTab.classList.toggle("active", isRegister);
  authMessage.textContent = "";
}

function renderAccount() {
  accountButton.setAttribute(
    "aria-label",
    currentUser ? `${currentUser.discount ? "VIP " : ""}${currentUser.name} account` : "Account",
  );
  accountButton.title = currentUser ? `${currentUser.discount ? "VIP " : ""}${currentUser.name}` : "Account";
  accountButton.setAttribute("aria-expanded", accountMenu.classList.contains("open") ? "true" : "false");
  renderAccountMenu();
  renderCart();
}

function renderAccountMenu() {
  const isAdmin = currentUser?.role === "admin";
  document.querySelectorAll(".guest-account-item").forEach((button) => {
    button.hidden = Boolean(currentUser);
  });
  document.querySelectorAll(".signed-in-account-item").forEach((button) => {
    button.hidden = !currentUser || isAdmin;
  });
  document.querySelectorAll(".admin-account-item").forEach((button) => {
    button.hidden = !isAdmin;
  });
  logoutButton.hidden = !currentUser;
  if (!currentUser) return;
  document.querySelectorAll("[data-account-view]").forEach((button) => {
    button.classList.toggle("active", button.dataset.accountView === activeAccountView);
  });
}

function positionAccountMenu() {
  const buttonRect = accountButton.getBoundingClientRect();
  accountMenu.style.top = `${Math.round(buttonRect.bottom + 8)}px`;
  accountMenu.style.right = `${Math.max(14, Math.round(window.innerWidth - buttonRect.right))}px`;
}

function openAccountMenu() {
  closeCartDrawer();
  renderAccountMenu();
  positionAccountMenu();
  accountMenu.classList.add("open");
  accountMenu.setAttribute("aria-hidden", "false");
  accountButton.setAttribute("aria-expanded", "true");
}

function closeAccountMenu() {
  accountMenu.classList.remove("open");
  accountMenu.setAttribute("aria-hidden", "true");
  accountButton.setAttribute("aria-expanded", "false");
}

function toggleAccountMenu() {
  if (accountMenu.classList.contains("open")) {
    closeAccountMenu();
  } else {
    openAccountMenu();
  }
}

function openAuth() {
  authModal.classList.add("open");
  authModal.setAttribute("aria-hidden", "false");
  closeCartDrawer();
  closeAccountMenu();
  authEmail.focus();
}

function closeAuthModal() {
  authModal.classList.remove("open");
  authModal.setAttribute("aria-hidden", "true");
}

function signInUser(user) {
  currentUser = user;
  orderHistory = [...(user.orders || [])];
  savedAddresses = [...(user.addresses || [])].map(normalizeAddress);
  checkoutDetails.name = user.name;
  checkoutDetails.email = user.email;
  customerName.value = user.name;
  customerEmail.value = user.email;
  renderAccount();
  closeAuthModal();
  if (user.role === "admin") {
    adminOrderSearchQuery = "";
    adminStatusFilter = "all";
    adminOrderPage = 1;
    openAccountPage("admin-orders");
  }
}

function logoutUser() {
  currentUser = null;
  orderHistory = [];
  savedAddresses = [];
  activeAccountView = "profile";
  showStorefront();
  closeAccountMenu();
  renderAccount();
}

function renderAdminOrders(query = adminOrderSearchQuery, status = adminStatusFilter, page = adminOrderPage) {
  const normalizedQuery = query.trim().toLowerCase();
  const statusOptions = ["all", ...new Set(storeOrders.map((order) => order.status).filter(Boolean))];
  const filteredOrders = storeOrders.filter((order) =>
    (status === "all" || order.status === status) &&
    [order.number, order.customer, order.email, order.status, order.payment, order.address]
      .filter(Boolean)
      .some((value) => String(value).toLowerCase().includes(normalizedQuery)),
  );
  const pageSize = 10;
  const pageCount = Math.max(1, Math.ceil(filteredOrders.length / pageSize));
  const currentPage = Math.min(Math.max(1, page), pageCount);
  const visibleOrders = filteredOrders.slice((currentPage - 1) * pageSize, currentPage * pageSize);
  adminOrderPage = currentPage;

  return `
    <div class="account-detail admin-orders-view">
      <div class="admin-toolbar">
        <h3>All store orders</h3>
        <div class="admin-filters" aria-label="Order filters">
          <label class="admin-search">
            <span>Search orders</span>
            <input id="adminOrderSearch" type="search" value="${escapeHtml(query)}" placeholder="Search ID, customer, status" autocomplete="off" />
          </label>
          <label class="admin-search">
            <span>Delivery status</span>
            <select id="adminStatusFilter">
              ${statusOptions
                .map(
                  (option) =>
                    `<option value="${escapeHtml(option)}" ${option === status ? "selected" : ""}>${escapeHtml(option === "all" ? "All statuses" : option)}</option>`,
                )
                .join("")}
            </select>
          </label>
        </div>
      </div>
      <div class="admin-table-wrap">
        <table class="admin-order-table">
          <thead>
            <tr>
              <th>Order</th>
              <th>Date</th>
              <th>Customer</th>
              <th>Email</th>
              <th>Delivery address</th>
              <th>Status</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            ${
              visibleOrders
                .map(
                  (order) => `
                    <tr>
                      <td><strong>${escapeHtml(order.number)}</strong></td>
                      <td>${escapeHtml(order.date)}</td>
                      <td>${escapeHtml(order.customer)}</td>
                      <td>${escapeHtml(order.email)}</td>
                      <td>${escapeHtml(order.address)}</td>
                      <td><span class="status-pill">${escapeHtml(order.status)}</span></td>
                      <td><strong>${currency(order.total)}</strong></td>
                    </tr>
                  `,
                )
                .join("") || `<tr><td colspan="7" class="admin-empty">No orders match that search.</td></tr>`
            }
          </tbody>
        </table>
      </div>
      <div class="admin-pagination">
        <span>${filteredOrders.length ? `${(currentPage - 1) * pageSize + 1}-${Math.min(currentPage * pageSize, filteredOrders.length)} of ${filteredOrders.length}` : "0 orders"}</span>
        <div>
          <button type="button" data-admin-page="${currentPage - 1}" ${currentPage === 1 ? "disabled" : ""}>Previous</button>
          <span>Page ${currentPage} of ${pageCount}</span>
          <button type="button" data-admin-page="${currentPage + 1}" ${currentPage === pageCount ? "disabled" : ""}>Next</button>
        </div>
      </div>
    </div>
  `;
}

function renderAccountPage() {
  if (!currentUser) return;
  const isAdmin = currentUser.role === "admin";
  heroSection.hidden = true;
  storefrontView.hidden = true;
  checkoutModal.hidden = true;
  faqPage.hidden = true;
  returnsPage.hidden = true;
  accountPage.hidden = false;
  if (isAdmin) activeAccountView = "admin-orders";
  accountPage.classList.toggle("admin-page", isAdmin);
  accountTitle.textContent = isAdmin ? "Admin" : "My Account";
  accountSidebar.innerHTML = isAdmin
    ? `<button class="active" type="button" data-account-view="admin-orders">All orders</button>`
    : `
      <button class="${activeAccountView === "profile" ? "active" : ""}" type="button" data-account-view="profile">Edit profile</button>
      <button class="${activeAccountView === "orders" ? "active" : ""}" type="button" data-account-view="orders">Order history</button>
      <button class="${activeAccountView === "addresses" ? "active" : ""}" type="button" data-account-view="addresses">Saved addresses</button>
    `;
  renderAccountMenu();

  if (isAdmin) {
    accountContent.innerHTML = renderAdminOrders();
    return;
  }

  if (activeAccountView === "profile") {
    accountContent.innerHTML = `
      <form class="account-form" id="profileForm">
        <h3>Edit profile</h3>
        <label>
          <span>Name</span>
          <input id="profileName" type="text" value="${escapeHtml(currentUser.name)}" />
        </label>
        <label>
          <span>Email address</span>
          <input id="profileEmail" type="email" value="${escapeHtml(currentUser.email)}" />
        </label>
        <button class="button primary" type="submit">Save profile</button>
      </form>
    `;
    return;
  }

  if (activeAccountView === "orders") {
    accountContent.innerHTML = `
      <div class="account-detail">
        <h3>Order history</h3>
        ${
          orderHistory
            .map(
              (order) => `
                <div class="account-list-row">
                  <span>${order.number}<small>${order.date}</small></span>
                  <strong>${currency(order.total)}</strong>
                </div>
              `,
            )
            .join("") || `<p class="menu-empty">No orders yet.</p>`
        }
      </div>
    `;
    return;
  }

  accountContent.innerHTML = `
    <form class="account-form" id="addressForm">
      <h3>Saved addresses</h3>
      ${(savedAddresses.length ? savedAddresses : [createEmptyAddress()])
        .map(
          (address, index) => {
            const normalized = normalizeAddress(address);
            return `
              <fieldset class="address-fieldset">
                <legend>Address ${index + 1}</legend>
                <div class="address-grid">
                  <label class="address-wide">
                    <span>Recipient name</span>
                    <input data-address-index="${index}" data-address-field="name" type="text" value="${escapeHtml(normalized.name)}" />
                  </label>
                  <label class="address-wide">
                    <span>Street address</span>
                    <input data-address-index="${index}" data-address-field="street" type="text" value="${escapeHtml(normalized.street)}" />
                  </label>
                  <label>
                    <span>ZIP code</span>
                    <input data-address-index="${index}" data-address-field="zip" type="text" value="${escapeHtml(normalized.zip)}" />
                  </label>
                  <label>
                    <span>City</span>
                    <input data-address-index="${index}" data-address-field="city" type="text" value="${escapeHtml(normalized.city)}" />
                  </label>
                  <label class="address-wide">
                    <span>Country</span>
                    <input data-address-index="${index}" data-address-field="country" type="text" value="${escapeHtml(normalized.country)}" />
                  </label>
                </div>
              </fieldset>
            `;
          },
        )
        .join("")}
      <button class="button primary" type="submit">Save addresses</button>
    </form>
  `;
}

function openAccountPage(view) {
  activeAccountView = view;
  closeAccountMenu();
  renderAccountPage();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function openInfoPage(page) {
  heroSection.hidden = true;
  storefrontView.hidden = true;
  accountPage.hidden = true;
  checkoutModal.hidden = true;
  faqPage.hidden = page !== "faq";
  returnsPage.hidden = page !== "returns";
  closeCartDrawer();
  closeAccountMenu();
  if (page === "returns") {
    returnMessage.textContent = "";
    returnDetails.hidden = true;
    returnDetails.innerHTML = "";
    returnOrderNumber.focus({ preventScroll: true });
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function getReturnEligibility(order) {
  const orderDate = parseDemoOrderDate(order.date);
  if (!orderDate) return { canCheck: false, isEligible: false, daysSinceOrder: null };
  const daysSinceOrder = Math.floor((new Date() - orderDate) / 86400000);
  return {
    canCheck: true,
    isEligible: daysSinceOrder <= 30,
    daysSinceOrder,
  };
}

function renderReturnDetails(order) {
  const eligibility = getReturnEligibility(order);
  returnDetails.hidden = false;
  returnDetails.innerHTML = `
    <h3>Order details</h3>
    <div class="return-detail-grid">
      <span>Order number</span><strong>${escapeHtml(order.number)}</strong>
      <span>Order date</span><strong>${escapeHtml(order.date)}</strong>
      <span>Customer</span><strong>${escapeHtml(order.customer)}</strong>
      <span>Total</span><strong>${currency(order.total)}</strong>
      <span>Status</span><strong>${escapeHtml(order.status)}</strong>
    </div>
    <p>${
      eligibility.canCheck && eligibility.isEligible
        ? "This order is within the 30-day return window."
        : eligibility.canCheck
          ? "This order is past the 30-day return period and is not eligible for return."
          : "This order date could not be checked for returns."
    }</p>
    ${
      eligibility.canCheck && eligibility.isEligible
        ? `<button class="button primary" type="button" data-request-return="${escapeHtml(order.number)}">Request return</button>`
        : ""
    }
  `;
}

function handleReturnSearch() {
  const requestedOrder = returnOrderNumber.value.trim().toUpperCase();
  const order = storeOrders.find((item) => item.number.toUpperCase() === requestedOrder);
  returnDetails.hidden = true;
  returnDetails.innerHTML = "";

  if (!requestedOrder) {
    returnMessage.textContent = "Enter an order number to search.";
    returnOrderNumber.focus();
    return;
  }

  if (!order) {
    returnMessage.textContent = "We could not find that demo order number.";
    return;
  }

  returnMessage.textContent = "";
  renderReturnDetails(order);
}

function showStorefront() {
  heroSection.hidden = false;
  accountPage.classList.remove("admin-page");
  accountPage.hidden = true;
  checkoutModal.hidden = true;
  faqPage.hidden = true;
  returnsPage.hidden = true;
  storefrontView.hidden = false;
  customerName.disabled = false;
  customerEmail.disabled = false;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function setCategory(categoryId) {
  activeCategory = categoryId;
  categoryFilter.value = categoryId;
  renderProducts();
}

document.addEventListener("click", (event) => {
  const addButton = event.target.closest("[data-product]");
  const increaseButton = event.target.closest("[data-increase]");
  const decreaseButton = event.target.closest("[data-decrease]");
  const demoLoginButton = event.target.closest("[data-demo-login]");
  const accountViewButton = event.target.closest("[data-account-view]");
  const authModeButton = event.target.closest("[data-auth-mode]");
  const infoPageButton = event.target.closest("[data-info-page]");
  const infoBackButton = event.target.closest("[data-info-back]");
  const returnExampleButton = event.target.closest("[data-return-example]");
  const requestReturnButton = event.target.closest("[data-request-return]");
  const productCard = event.target.closest("[data-view-product]");
  const storefrontLink = event.target.closest('a[href^="#"]');

  if (storefrontLink && !storefrontLink.closest(".account-page")) {
    showStorefront();
  }

  if (addButton) {
    const id = addButton.dataset.product;
    cart[id] = (cart[id] || 0) + 1;
    closeProductDetails();
    renderCart();
    renderProducts();
    openCart();
  }

  if (increaseButton) {
    const id = increaseButton.dataset.increase;
    cart[id] += 1;
    renderCart();
    renderProducts();
  }

  if (decreaseButton) {
    const id = decreaseButton.dataset.decrease;
    cart[id] -= 1;
    if (cart[id] <= 0) delete cart[id];
    renderCart();
    renderProducts();
  }

  const adminPageButton = event.target.closest("[data-admin-page]");
  if (adminPageButton && !adminPageButton.disabled) {
    adminOrderPage = Number(adminPageButton.dataset.adminPage);
    accountContent.innerHTML = renderAdminOrders();
    return;
  }

  if (demoLoginButton) {
    const user = demoUsers.find((item) => item.email === demoLoginButton.dataset.demoLogin);
    if (user) {
      authEmail.value = user.email;
      authPassword.value = user.password;
      setAuthMode("signin");
    }
  }

  if (authModeButton) {
    setAuthMode(authModeButton.dataset.authMode);
    closeAccountMenu();
    openAuth();
  }

  if (infoPageButton) {
    openInfoPage(infoPageButton.dataset.infoPage);
  }

  if (infoBackButton) {
    showStorefront();
  }

  if (returnExampleButton) {
    returnOrderNumber.value = returnExampleButton.dataset.returnExample;
    returnMessage.textContent = "";
    returnDetails.hidden = true;
    returnDetails.innerHTML = "";
    returnOrderNumber.focus();
  }

  if (requestReturnButton) {
    returnMessage.textContent = `${requestReturnButton.dataset.requestReturn} return request has been started.`;
  }

  if (accountViewButton && currentUser) {
    openAccountPage(accountViewButton.dataset.accountView);
  }

  if (productCard && !event.target.closest("button")) {
    openProductModal(productCard.dataset.viewProduct);
  }
});

document.addEventListener("keydown", (event) => {
  const productCard = event.target.closest?.("[data-view-product]");
  if (productCard && (event.key === "Enter" || event.key === " ")) {
    event.preventDefault();
    openProductModal(productCard.dataset.viewProduct);
  }
});

function positionCartDrawer() {
  const buttonRect = cartButton.getBoundingClientRect();
  cartDrawer.style.top = `${Math.round(buttonRect.bottom + 8)}px`;
  cartDrawer.style.right = `${Math.max(14, Math.round(window.innerWidth - buttonRect.right))}px`;
}

function openCart() {
  positionCartDrawer();
  cartDrawer.classList.add("open");
  cartDrawer.setAttribute("aria-hidden", "false");
}

function closeCartDrawer() {
  cartDrawer.classList.remove("open");
  cartDrawer.setAttribute("aria-hidden", "true");
}

cartButton.addEventListener("click", openCart);
closeCart.addEventListener("click", closeCartDrawer);
window.addEventListener("resize", () => {
  if (cartDrawer.classList.contains("open")) positionCartDrawer();
  if (accountMenu.classList.contains("open")) positionAccountMenu();
});
window.addEventListener("scroll", () => {
  if (cartDrawer.classList.contains("open")) positionCartDrawer();
  if (accountMenu.classList.contains("open")) positionAccountMenu();
});
document.addEventListener("click", (event) => {
  const clickedCart = event.target.closest("#cartDrawer");
  const clickedCartButton = event.target.closest("#cartButton");
  const clickedCartAction = event.target.closest("[data-product], [data-increase], [data-decrease]");
  if (!clickedCart && !clickedCartButton && !clickedCartAction) closeCartDrawer();
});
accountButton.addEventListener("click", () => {
  toggleAccountMenu();
});
document.addEventListener("click", (event) => {
  const clickedMenu = event.target.closest("#accountMenu");
  const clickedAccountButton = event.target.closest("#accountButton");
  if (!clickedMenu && !clickedAccountButton) closeAccountMenu();
});
logoutButton.addEventListener("click", logoutUser);
accountBackButton.addEventListener("click", showStorefront);
closeAuth.addEventListener("click", closeAuthModal);
authModal.addEventListener("click", (event) => {
  if (event.target === authModal) closeAuthModal();
});
closeProductModal.addEventListener("click", closeProductDetails);
productModal.addEventListener("click", (event) => {
  if (event.target === productModal) closeProductDetails();
});
signInTab.addEventListener("click", () => setAuthMode("signin"));
registerTab.addEventListener("click", () => setAuthMode("register"));
authForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (authMode === "register") {
    const name = authName.value.trim() || "New Customer";
    signInUser({
      name,
      label: "Registered Customer",
      email: authEmail.value.trim(),
      password: authPassword.value,
      discount: 0,
      addresses: [],
      orders: [],
    });
    return;
  }

  const user = demoUsers.find(
    (item) => item.email === authEmail.value.trim() && item.password === authPassword.value,
  );

  if (user) {
    signInUser(user);
  } else {
    authMessage.textContent = "Email or password is incorrect.";
  }
});
document.addEventListener("submit", (event) => {
  if (event.target.id === "profileForm") {
    event.preventDefault();
    currentUser.name = document.querySelector("#profileName").value.trim() || currentUser.name;
    currentUser.email = document.querySelector("#profileEmail").value.trim() || currentUser.email;
    checkoutDetails.name = currentUser.name;
    checkoutDetails.email = currentUser.email;
    customerName.value = currentUser.name;
    customerEmail.value = currentUser.email;
    renderAccount();
    renderAccountPage();
  }

  if (event.target.id === "addressForm") {
    event.preventDefault();
    const nextAddresses = [];
    document.querySelectorAll(".address-fieldset").forEach((fieldset) => {
      const address = createEmptyAddress();
      fieldset.querySelectorAll("[data-address-field]").forEach((field) => {
        address[field.dataset.addressField] = field.value.trim();
      });
      if (isCompleteAddress(address)) nextAddresses.push(address);
    });
    savedAddresses = nextAddresses;
    currentUser.addresses = savedAddresses;
    renderAccountPage();
  }

  if (event.target.id === "returnForm") {
    event.preventDefault();
    handleReturnSearch();
  }
});
document.addEventListener("input", (event) => {
  if (event.target.id === "adminOrderSearch") {
    adminOrderSearchQuery = event.target.value;
    adminOrderPage = 1;
    accountContent.innerHTML = renderAdminOrders();
    document.querySelector("#adminOrderSearch")?.focus({ preventScroll: true });
  }
});
document.addEventListener("change", (event) => {
  if (event.target.id === "adminStatusFilter") {
    adminStatusFilter = event.target.value;
    adminOrderPage = 1;
    accountContent.innerHTML = renderAdminOrders();
  }
});
checkoutButton.addEventListener("click", openCheckout);
closeCheckout.addEventListener("click", closeCheckoutModal);
savedAddressSelect.addEventListener("change", () => {
  hideAddressSuggestions();
  if (savedAddressSelect.value === "new") {
    useNewAddress();
    customerStreet.focus();
    return;
  }

  useSavedAddress(Number(savedAddressSelect.value));
});
customerStreet.addEventListener("input", () => {
  if (!savedAddressField.hidden && savedAddressSelect.value !== "new") {
    savedAddressSelect.value = "new";
    selectedAddressDisplay.hidden = true;
    setAddressFieldsVisible(true);
  }
  renderAddressSuggestions();
});
customerStreet.addEventListener("focus", renderAddressSuggestions);
customerStreet.addEventListener("blur", () => {
  window.setTimeout(hideAddressSuggestions, 120);
});
addressSuggestions.addEventListener("mousedown", (event) => {
  event.preventDefault();
});
addressSuggestions.addEventListener("click", (event) => {
  const button = event.target.closest("[data-address-suggestion]");
  if (!button) return;
  selectAddressSuggestion(Number(button.dataset.addressSuggestion));
});
continueToPayment.addEventListener("click", () => {
  if (validateAddressStep()) showCheckoutPanel("payment");
});
backToAddress.addEventListener("click", () => {
  showCheckoutPanel("address");
  customerName.focus();
});
continueToReview.addEventListener("click", () => {
  if (validatePaymentStep()) showCheckoutPanel("review");
});
backToPayment.addEventListener("click", () => {
  showCheckoutPanel("payment");
  deliveryDate.focus();
});
dateField.addEventListener("click", () => {
  openDeliveryDatePicker();
});
deliveryDate.addEventListener("keydown", (event) => {
  const allowedKeys = ["Tab", "Shift", "Enter", " ", "Escape"];
  if (allowedKeys.includes(event.key)) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openDeliveryDatePicker();
    }
    return;
  }
  event.preventDefault();
});
checkoutForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (activeCheckoutPanel === "address") {
    if (validateAddressStep()) showCheckoutPanel("payment");
    return;
  }

  if (activeCheckoutPanel === "payment") {
    if (validatePaymentStep()) showCheckoutPanel("review");
    return;
  }

  if (!validateAddressStep() || !validatePaymentStep()) return;
  syncCheckoutDetails();
  checkoutMessage.textContent = "";
  renderSuccess();
  showCheckoutStep("success");
  cart = {};
  renderCart();
  renderProducts();
});
finishOrder.addEventListener("click", closeCheckoutModal);
categoryFilter.addEventListener("change", () => setCategory(categoryFilter.value));
sortSelect.addEventListener("change", renderProducts);
searchInput.addEventListener("input", renderProducts);

renderProducts();
renderCart();
