# Car Module (`src/car`)

এই ফোল্ডারটা **Car Listing** ফিচারের জন্য। এখানে React-এর **component decomposition**, **search filtering**, **checkbox-based filtering**, এবং **derived state** (computed filtering) দেখানো হয়েছে।

## কী কী ব্যবহার করা হয়েছে

- **React Functional Components**
  - `CarContainer`, `CarList`, `CarCard`
- **React Hook: `useState`**
  - `searchTerm` স্টেট
  - `showOnlyPremium` স্টেট
  - `cars` স্টেট (initial data থেকে)
- **Props (Parent -> Child data flow)**
  - `CarContainer` থেকে `CarList` এ `searchTerm`, `cars`
  - `CarList` থেকে `CarCard` এ `car`
- **Controlled inputs (Search + Checkbox)**
  - `Search` component input এর `value={searchTerm}` এবং `onChange` দিয়ে স্টেট আপডেট
  - `Checkbox` component এর `onChange` দিয়ে `showOnlyPremium` আপডেট
- **Filtering (search + premium)**
  - Premium filter আগে করা: `filteredCars`
  - তারপর `CarList` এ title match করে search filter
- **PropTypes validation (`prop-types`)**
  - `CarList`, `CarCard` এ props টাইপ চেক
- **Tailwind CSS**
  - grid layout, spacing, border, shadow, responsive-ish structure

## ফাইল অনুযায়ী কাজের ব্যাখ্যা

## `CarContainer.jsx`

- **Responsibility**
  - Car feature এর root/container component
  - data রাখা + filtering state handle করা + child component এ props pass করা

- **Data source**
  - `carData` array (mock)

- **State**
  - `const [searchTerm, setSearchTerm] = useState("")`
  - `const [cars] = useState(carData)`
    - এখানে `cars` update করা হচ্ছে না, শুধু initial data store হিসেবে রাখা
  - `const [showOnlyPremium, setShowOnlyPremium] = useState(false)`

- **Derived filtering**
  - `const filteredCars = showOnlyPremium ? cars.filter(car => car.isPremium) : cars;`
  - মানে checkbox অন থাকলে শুধু premium গাড়ি দেখাবে

- **UI composition**
  - `Header` (common)
  - `Search` (common)
  - `Checkbox` (common)
  - `CarList`

- **Event flow**
  - `Search` -> `setSearchTerm`
  - `Checkbox` -> `setShowOnlyPremium`

## `CarList.jsx`

- **Responsibility**
  - `cars` array থেকে `searchTerm` অনুযায়ী matching car গুলো দেখানো

- **Filtering**
  - `cars.forEach(...)` লুপ
  - কন্ডিশন:
    - `if (car.title.toLowerCase().indexOf(searchTerm.toLowerCase()) === -1) return;`

- **Rendering**
  - matching হলে: `rows.push(<CarCard key={car.id} car={car} />)`
  - grid layout:
    - `<div className="grid grid-cols-3 gap-4">{rows}</div>`

- **PropTypes**
  - `cars` array এর shape validate করা হয়েছে (id/title/brand/year/price/isPremium)

## `CarCard.jsx`

- **Responsibility**
  - একেকটা car item এর presentational card

- **Data display**
  - `title`, `brand`, `year`, `price`, `isPremium`
  - `price.toLocaleString()` দিয়ে সুন্দর করে number format

## ডাটা ফ্লো (High-level)

- **User types in Search**
  - `Search` -> `onSearchTerm` -> `setSearchTerm`
  - `CarContainer` re-render -> `CarList` re-render -> title অনুযায়ী ফিল্টার

- **User toggles Premium checkbox**
  - `Checkbox` -> `onPremiumCars(checked)` -> `setShowOnlyPremium(checked)`
  - `filteredCars` recompute -> `CarList` এ কম/বেশি cars যায়

## Important Notes

- এখানে `premium filter` প্রথমে container এ করা হচ্ছে; `search filter` list component এ করা হচ্ছে।
  - এটা শেখানোর জন্য ঠিক আছে, কিন্তু production এ সাধারণত filtering এক জায়গায় consolidate করলে maintain করা সহজ হয়।
- এই মডিউলে API call নেই; সবই `mock data`।
