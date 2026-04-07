import PropTypes from 'prop-types';

function CarCard({ car }) {
  return (
    <div className='p-2 border shadow-sm rounded-md'>
      <h3 className='text-xl font-semibold mb-2'>{car.title}</h3>
      <p><span className='font-semibold'>Brand:</span> {car.brand}</p>
      <p><span className='font-semibold'>Year:</span> {car.year}</p>
      <p><span className='font-semibold'>Price:</span> ${car.price.toLocaleString()}</p>
      <p><span className='font-semibold'>Premium:</span> {car.isPremium ? 'Yes' : 'No'}</p>
    </div>
  )
}

CarCard.propTypes = {
  car: PropTypes.object.isRequired,
};

export default CarCard