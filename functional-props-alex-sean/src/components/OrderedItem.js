const OrderedItem = (props) => {
    return <>
    <div className='ordereditem'>
        <img src={props.foodImageSrc} className='foodsize' /> {props.foodName}: ${props.foodPrice}
    </div>
    </>
}






export default OrderedItem 