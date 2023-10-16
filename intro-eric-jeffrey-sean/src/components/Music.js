const Music = () => {
    return <div className="Player">
    <audio id="player" autoplay controls>
    <source src="Dancing_Skeletons.mp3" type="audio/mp3" />
    </audio>
    </div>
}
export default Music