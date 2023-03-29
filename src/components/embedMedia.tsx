interface MediaProps {
  id: string
}


function EmbedMedia(props: MediaProps) {

  return (
    <div className="video">
      {(props.id.length < 30) ?
        <iframe
          src={`https://www.youtube.com/embed/${props.id}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        :
        <iframe
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src={props.id}
        ></iframe>

      }
    </div>
  );
};

export default EmbedMedia;
