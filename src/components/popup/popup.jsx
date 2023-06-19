import useMessage from "../../stores/useMessage"
import { useEffect, useState } from "react"
import { useTransition, animated } from "react-spring"

export default function Popup() {
	const messageId = useMessage((state) => state.messageId)
	const setMessagesLength = useMessage((state) => state.setMessagesLength)

	const messages = [
		<article>
			Discover Earth's Tapestry: Navigate a 3D Website and Unearth Its Hidden Gems
			<p>(Scroll to explore)</p>
		</article>,
		<article>
			The largest desert in the world is not the sandy Sahara but the Antarctic Desert. Covering about 5.5 million square miles, it is the driest and coldest place on Earth.
		</article>,
		<article>
			Earth has a rare atmospheric phenomenon called sprites. These elusive electrical discharges high above thunderstorms resemble red or blue tendrils and can extend up to 60 miles into the atmosphere.
		</article>,
		<article>
			The deepest part of the Earth's oceans is the Mariana Trench in the western Pacific Ocean. It reaches a staggering depth of approximately 36,070 feet (10,972 meters), which is deeper than Mount Everest is tall.
		</article>,
		<article>
			The Earth's rotation is gradually slowing down due to tidal forces caused by the Moon. As a result, the length of a day increases by about 1.8 milliseconds every century.
		</article>,
		<article>
			Approximately 90% of the Earth's volcanic activity occurs beneath the oceans. These underwater volcanoes, known as submarine or seafloor volcanoes, contribute to the formation of new land and the recycling of Earth's crust.
		</article>,
		<article>
			Discover more projects on my{" "}
			<a
				href="https://waqar-folio2.netlify.app"
				target="_blank"
				rel="noopener noreferrer"
			>
				portfolio
			</a>
			.
		</article>,
	]

	useEffect(() => {
		setMessagesLength(messages.length)
	}, [])

	const transitions = useTransition(messageId, {
		from: { opacity: 0 },
		enter: { opacity: 1 },
		leave: { opacity: 0 },
	})

	return transitions((style, index) => {
		return (
			<animated.div className="popup" style={style}>
				{messages[index]}
			</animated.div>
		)
	})
}
