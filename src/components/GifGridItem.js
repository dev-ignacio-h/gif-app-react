const GifGridItem = ({id, title, url}) => {
    // console.log(img);
    // console.log(id)
    // console.log(title)
    // console.log(url)
    return (
        <div className="card">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    );
}
 
export default GifGridItem;