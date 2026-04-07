
function Checkbox({ id, label }) {
  return (
    <div>
      <input type="checkbox" id={id} name={id} className="mr-2" />
      <label htmlFor={id}>{label}</label>
    </div>
  )
}

export default Checkbox