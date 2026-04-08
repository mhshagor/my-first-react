
import PropTypes from "prop-types";
function Checkbox({ id, label, onPremiumCars }) {
  return (
    <div className="flex items-center">
      <input type="checkbox" id={id} name={id} className="mr-2" onChange={(e) => onPremiumCars(e.target.checked)} />
      <label htmlFor={id}>{label}</label>
    </div>
  )
}

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onPremiumCars: PropTypes.func.isRequired,
};

export default Checkbox