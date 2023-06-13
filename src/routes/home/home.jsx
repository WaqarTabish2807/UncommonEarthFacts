import { Suspense, useState } from "react"
import Experience from "../../components/experience/experience"
import Popup from "../../components/popup/popup"
import Loader from "../../components/loader/loader"

export default function Home() {
	const [hasStarted, setHasStarted] = useState(false)

	return (
		<>
			<Popup />
			<Suspense fallback={null}>
				<Experience />
			</Suspense>
			<Loader
				hasStarted={hasStarted}
				onStart={() => setHasStarted(true)}
			/>
		</>
	)
}
