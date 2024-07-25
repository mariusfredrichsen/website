import './App.css';
import './CV.css';
import MenuButton from './MenuButton.js';
import ThemeButton from './ThemeButton.js';

function CV() {

	return (
		<>
			<div className="overhead">

				<div style={{ textAlign: "left", margin: "10px" }}>
					<MenuButton />
				</div>

				<h1 className="header" style={{ textAlign: "center" }}>Marius Fredrichsen</h1>

				<div style={{ textAlign: "right", margin: "10px" }}>
					<ThemeButton />
				</div>

			</div >

			<div className="container">

				<div className="text-left">
					<p>
						Adresse: Oslo (mer detaljer oppgis ved forespørsel)<br />
						Telefon: 94141698<br />
						Epost: mariusfredrichsen@gmail.com<br />
						Født: 15.08.2002<br />
					</p>
				</div>

				<div className="box-first">
					<h2>Erfaringer</h2>

					<hr></hr>

					<p className="text-left">

						<strong>Retter/Gruppelærer på Institutt for informatikk, Universitet i Oslo</strong><br />

						<p className="date-intervall">Aug-2024 – Nå</p>

						<ul>
							<li>Holdt undervisning i IN2010</li>
							<li>Rettet innleveringer</li>
							<li>Hjelpet studenter i lab timer</li>
						</ul>

					</p>

					<p className="text-left">
						<strong>Lærer på Sommerskolen Oslo via YoungCoderz</strong><br />

						<p className="date-intervall">Jun-2024 – Jul-2024</p>

						<ul>
							<li>Holdt undervisning om programmering for 5. og 6. klassinger<br />Teknologier: Scratch, Sphero Edu, MS Arcade, CoSpaces Edu, Python</li>
							<li>Hjelpet barn med utfordingene bak programmering</li>
						</ul>
					</p>

					<p className="text-left">

						<strong>Retter/Gruppelæer på Institutt for informatikk, Universitet i Oslo</strong><br />

						<p className="date-intervall">Aug-2023 – Des-2023 og Jan-2024 – Jun-2024</p>

						<ul>
							<li>Holdt undervisning i IN1000</li>
							<li>Rettet innleveringer</li>
							<li>Hjelpet studenter i lab timer</li>
						</ul>

					</p>

					<p className="text-left">

						<strong>Gartner på Asker kirke</strong><br />

						<p className="date-intervall">Jun-2022 – Jul-2022</p>

						<ul>
							<li>Trimmet hekker og trær</li>
							<li>Klipping av gress med sitteklipper og kantklipper</li>
						</ul>

					</p>

				</div>

				<div className="box-first">

					<h2>Utdanning</h2>

					<hr></hr>

					<p className="text-left">
						<strong>Universitet i Oslo</strong><br />
						<p className="date-intervall">Aug-2022 – Nå</p>
						Bachelor utdanning Informatikk – Fritt sammensatt
					</p>

					<p className="text-left">
						<strong>Drammen Videregående Skole</strong><br />
						<p className="date-intervall">Aug-2018 – Jun-2021</p>
						Studiespesialiserende med forskerlinje
					</p>

				</div>

				<div className="box-first">

					<h2>Prosjekter</h2>

					<hr></hr>

					<p className="text-left">
						IN1060 – Bruksorientert design<br />
						IN2000 – Software Engineering med prosjektarbeid<br />
						Discord-bot<br />
						Denne nettsiden<br />
					</p>

				</div>

				<div className="box-first">

					<h2>Annet</h2>

					<hr></hr>

					<p className="text-left">
						Førerkort – Klasse B automat<br />
						Språk – Norsk meget godt og Engelsk godt
					</p>

				</div>

				<div className="box-first">
					<h2>Referanse</h2>

					<hr></hr>

					<p className="text-left">
						Oppgis ved forespørsel
					</p>

				</div>
			</div>
		</>
	)
}

export default CV;