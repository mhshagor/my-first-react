# Book Module (`src/book`)

এই ফোল্ডারটা **Boimela (বইমেলা)** ইউআই/ফিচার সেটের জন্য। এখানে মূলত React-এর **Component composition**, **props দিয়ে data pass**, **state management (`useState`)**, এবং **list filtering** দেখানো হয়েছে।

## কী কী ব্যবহার করা হয়েছে

- **React Functional Components**
  - `Boimela`, `BookList`, `BookRow`, `BookDetails`, `FeatureBook`
- **React Hook: `useState`**
  - বইয়ের লিস্ট (`books`) এবং সার্চ ইনপুট (`searchTerm`) স্টেটে রাখা হয়েছে
- **Props (Parent -> Child data flow)**
  - `Boimela` থেকে `BookList` এ `searchTerm`, `books`, `onFeaturedBook`
  - `BookList` থেকে `BookRow` এ `book`, `onFeaturedBook`
  - `BookRow` থেকে `BookDetails` এ `title`, `author`
  - `BookRow` থেকে `FeatureBook` এ `book`, `onFeaturedBook`
- **Callback props (Child -> Parent event)**
  - `FeatureBook` বাটনে ক্লিক করলে `onFeaturedBook(book.id)` কল করে parent-এর স্টেট আপডেট করানো হয়
- **PropTypes validation (`prop-types`)**
  - `BookList`, `BookRow`, `BookDetails`, `FeatureBook` এ props টাইপ চেক করা হয়েছে
- **Icon library: `lucide-react`**
  - `FeatureBook` এ `Star` আইকন ব্যবহার
- **Tailwind CSS utility classes**
  - layout, spacing, shadow, typography ইত্যাদি

## ফাইল অনুযায়ী কাজের ব্যাখ্যা

## `Boimela.jsx`

- **Responsibility**
  - এইটা পুরো Book UI-এর container/feature root component
- **State**
  - `BOOKS` নামে initial mock data
  - `const [books, setBooks] = useState(BOOKS)`
  - `const [searchTerm, setSearchTerm] = useState("")`
- **Featured toggle logic**
  - `toogleFeatured(id)` ফাংশন বইয়ের `featured` boolean টগল করে
  - এখানে `setBooks(books.map(...))` দিয়ে **immutable update** করা হয়েছে
  - কন্ডিশন:
    - `book.id === id` হলে `featured: !book.featured`
- **UI composition**
  - `Header` (common component)
  - `Search` (common component)
  - `BookList`

## `BookList.jsx`

- **Responsibility**
  - সার্চ টার্ম অনুযায়ী বইগুলো ফিল্টার করে row তৈরি করে দেখায়
- **Filtering**
  - `books.forEach(...)` লুপ
  - `if (book.title.toLowerCase().indexOf(searchTerm.toLowerCase()) === -1) return;`
  - অর্থাৎ `searchTerm` টাইটেলে না থাকলে item বাদ
- **Rendering**
  - `rows.push(<BookRow ... />)` করে শেষে `<div className="space-y-4">{rows}</div>`

## `BookRow.jsx`

- **Responsibility**
  - প্রতিটা বইয়ের জন্য row layout
- **Composition**
  - `BookDetails` (title/author দেখায়)
  - `FeatureBook` (star button)
- **Props pass-through**
  - `onFeaturedBook` callback নিচের কম্পোনেন্টে পাঠানো হয়

## `BookDetails.jsx`

- **Responsibility**
  - একদম simple presentational component
  - `title`, `author` দেখায়

## `FeatureBook.jsx`

- **Responsibility**
  - book কে featured/unfeatured করার UI
- **Event flow**
  - `<button onClick={() => onFeaturedBook(book.id)} ...>`
  - ক্লিক -> parent (Boimela) এর `toogleFeatured` -> `setBooks` -> re-render
- **Visual state**
  - `Star` আইকনের `color`:
    - `book.featured ? 'green' : 'black'`

## ডাটা ফ্লো (High-level)

- **User types in search box**
  - `Search` -> `onSearchTerm` -> `setSearchTerm` -> `BookList` re-render -> ফিল্টারড list
- **User clicks star button**
  - `FeatureBook` -> `onFeaturedBook(book.id)` -> `Boimela.toogleFeatured` -> `setBooks` -> UI update

## Important Notes

- এই মডিউলে data fetching নেই; সবই `mock data` দিয়ে শেখানোর জন্য করা।
- `PropTypes` ব্যবহার করা হয়েছে যাতে props ভুল টাইপ হলে dev time এ warning পাওয়া যায়।
