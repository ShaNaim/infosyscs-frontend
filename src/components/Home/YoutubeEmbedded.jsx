import React from "react";
import PropTypes from "prop-types";

const YoutubeEmbed = ({ embedId }) => (
	<div style={{ width: "100%", height: "100%" }}>
		<iframe
			width="100%"
			height="100%"
			src={`https://www.youtube.com/embed/${embedId}`}
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowFullScreen
			title="Infosys Coding Solution"
		/>
	</div>
);

YoutubeEmbed.propTypes = {
	embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
