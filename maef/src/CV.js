import './App.css';
import './CV.css';
import MenuButton from './MenuButton.js';
import ThemeButton from './ThemeButton.js';



function CV() {

	const accordian = (element) => {
		element.classList.toggle("active");
		var panel = element.nextElementSibling;

		if (panel.style.maxHeight) {
			panel.style.maxHeight = null;
		} else {
			panel.style.maxHeight = panel.scrollHeight + "px";
		}
	}

	return (
		<div>
			<div className="overhead">

				<div style={{ textAlign: "left", margin: "10px" }}>
					<MenuButton />
				</div>

				<div style={{ textAlign: "right", margin: "10px" }}>
					<ThemeButton />
				</div>

			</div >

			<h1 style={{ textAlign: "center", fontSize: "3rem" }}>Marius Fredrichsen</h1>


			<div className="container">

				<div className="text-left">
					<p>
						Adresse: Oslo (mer detaljer oppgis ved forespørsel)<br />
						Telefon: <a href="tel:94141698">+47 941 41 698</a><br />
						Epost: <a href="mailto:mariusfredrichsen@gmail.com">mariusfredrichsen@gmail.com</a><br />
						Født: 15.08.2002<br />
					</p>
				</div>

				<div className="box-first">
					<h2>Erfaringer</h2>

					<hr></hr>

					<p className="text-left">

						<strong>Retter/Gruppelærer på Institutt for informatikk, Universitet i Oslo</strong><br />

						<p className="date-intervall">Jan-2025 – Jun-2025</p>

						<ul>
							<li>Holdt undervisning i <a href="https://www.uio.no/studier/emner/matnat/ifi/IN2000/" target="_blank" rel="noreferrer" className="cv-link">IN2000: Software Engineering med prosjektarbeid </a></li>
							<li>Rettet innleveringer</li>
							<li>Hjulpet studenter i labtimer</li>
						</ul>

					</p>

					<p className="text-left">

						<strong>Retter/Gruppelærer på Institutt for informatikk, Universitet i Oslo</strong><br />

						<p className="date-intervall">Aug-2024 – Des-2024</p>

						<ul>
							<li>Holdt undervisning i <a href="https://www.uio.no/studier/emner/matnat/ifi/IN2010/" target="_blank" rel="noreferrer" className="cv-link">IN2010: Algoritmer og datastrukturer</a></li>
							<li>Rettet innleveringer</li>
							<li>Hjulpet studenter i labtimer</li>
						</ul>

					</p>

					<p className="text-left">
						<strong>Lærer på Sommerskolen Oslo via YoungCoderz</strong><br />

						<p className="date-intervall">Jun-2024 – Jul-2024</p>

						<ul>
							<li>Holdt undervisning om programmering for 5. og 6. klassinger<br />Teknologier: Scratch, Sphero Edu, MS Arcade, CoSpaces Edu, Python</li>
							<li>Hjulpet barn med programmering</li>
						</ul>
					</p>

					<p className="text-left">

						<strong>Retter/Gruppelæer på Institutt for informatikk, Universitet i Oslo</strong><br />

						<p className="date-intervall">Aug-2023 – Des-2023 og Jan-2024 – Jun-2024</p>

						<ul>
							<li>Holdt undervisning i <a href="https://www.uio.no/studier/emner/matnat/ifi/IN1000/" target="_blank" rel="noreferrer" className="cv-link">IN1000: Introduksjon til objektorientert programmering</a></li>
							<li>Rettet innleveringer</li>
							<li>Hjulpet studenter i labtimer</li>
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

					<div className="drop-down" >
						<div className="study-header" onClick={(e) => { accordian(e.currentTarget) }}>

							<strong>Universitet i Oslo</strong><br />
							<p className="date-intervall">Aug-2022 – Nå</p>
							Bachelor i Informatikk – Fritt sammensatt<br />

						</div>

						<div className="links">
							<hr style={{ marginLeft: "10px", marginRight: "10px" }}></hr>
							<div className="semester">
								<h5>1. Semester</h5>
								<a href="https://www.uio.no/studier/emner/matnat/ifi/IN1000/" target="_blank" rel="noreferrer">IN1000: Introduksjon til objektorientert programmering</a><br />
								<a href="https://www.uio.no/studier/emner/matnat/ifi/IN1020/" target="_blank" rel="noreferrer">IN1020: Introduksjon til datateknologi</a><br />
								<a href="https://www.uio.no/studier/emner/matnat/ifi/IN1050/" target="_blank" rel="noreferrer">IN1050: Introduksjon til design, bruk, interaksjon</a><br />

							</div>

							<div className="semester">
								<h5>2. Semester</h5>
								<a href="https://www.uio.no/studier/emner/matnat/ifi/IN1010/" target="_blank" rel="noreferrer">IN1010: Objektorientert programmering</a><br />
								<a href="https://www.uio.no/studier/emner/matnat/ifi/IN1030/" target="_blank" rel="noreferrer">IN1030: Systemer, krav og konsekvenser</a><br />
								<a href="https://www.uio.no/studier/emner/matnat/ifi/IN1060/" target="_blank" rel="noreferrer">IN1060: Bruksorientert design</a><br />
								<a href="https://www.uio.no/studier/emner/matnat/ifi/IN1150/" target="_blank" rel="noreferrer">IN1150: Logiske metoder</a><br />

							</div>

							<div className="semester">
								<h5>3. Semester</h5>
								<a href="https://www.uio.no/studier/emner/matnat/ifi/IN2010/" target="_blank" rel="noreferrer">IN2010: Algoritmer og datastrukturer</a><br />
								<a href="https://www.uio.no/studier/emner/matnat/ifi/IN2020/" target="_blank" rel="noreferrer">IN2020: Metoder i interaksjonsdesign</a><br />
								<a href="https://www.uio.no/studier/emner/matnat/ifi/IN2090/" target="_blank" rel="noreferrer">IN2090: Databaser og datamodellering</a><br />
								<a href="https://www.uio.no/studier/emner/matnat/ifi/IN2120/" target="_blank" rel="noreferrer">IN2120: Informasjonssikkerhet</a><br />

							</div>

							<div className="semester">
								<h5>4. Semester</h5>
								<a href="https://www.uio.no/studier/emner/matnat/ifi/IN2000/" target="_blank" rel="noreferrer">IN2000: Software Engineering med prosjektarbeid</a><br />
								<a href="https://www.uio.no/studier/emner/matnat/ifi/IN2150/" target="_blank" rel="noreferrer">IN2150: IT i organisasjoner</a><br />
								<a href="https://www.uio.no/studier/emner/hf/ifikk/EXPHIL03/" target="_blank" rel="noreferrer">EXPHIL03: Examen philosophicum</a><br />
							</div>

							<div className="semester">
								<h5>5. Semester</h5>
								<a href="https://www.uio.no/studier/emner/matnat/ifi/IN2040/" target="_blank" rel="noreferrer">IN2040: Funksjonell programmering</a><br />
								<a href="https://www.uio.no/studier/emner/matnat/ifi/IN3130/" target="_blank" rel="noreferrer">IN3130: Algoritmer: Design og effektivitet</a><br />
								<a href="https://www.uio.no/studier/emner/matnat/ifi/IN5320/" target="_blank" rel="noreferrer">IN5320: Development in platform ecosystems</a><br />
							</div>

							<div className="semester">
								<h5>6. Semester (while True:)</h5>
								<a href="https://www.uio.no/studier/emner/matnat/ifi/IN3030/">IN3030: Effektiv parallellprogrammering</a><br />
								<a href="https://www.uio.no/studier/emner/matnat/ifi/IN3050/">IN3050: Introduksjon til kunstig intelligens og maskinlæring</a><br />
								<a href="https://www.uio.no/studier/emner/matnat/ifi/IN4030/">IN4030: Introduksjon til bioinformatikk</a><br />
							</div>
						</div>
					</div>

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
						<strong>Tangent Trim</strong><br />
						<div>
							<p className="date-intervall">Teknologier: Arduino, Github, Autodesk Fusion 360</p>
							Et design-prosjekt i <a href="https://www.uio.no/studier/emner/matnat/ifi/IN1060" target="_blank" rel="noreferrer">IN1060: Bruksorientert design </a>
							som handler om designprosessen og digital/fysisk prototyping for en valgt brukergruppe.
							Mer info om prosjektet <a href="https://www.uio.no/studier/emner/matnat/ifi/IN1060/v23/prosjekter-var-2023/designerne.ino/" target="_blank" rel="noreferrer">her</a>.<br /><br />
						</div>

						<strong>BåtBuddy</strong><br />
						<div>
							<p className="date-intervall">Teknologier: Android Studio, Kotlin, SQL,  Figma</p>
							Et gruppe-prosjekt i <a href="https://www.uio.no/studier/emner/matnat/ifi/IN2000/" target="_blank" rel="noreferrer">IN2000: Software Engineering med prosjektarbeid </a>
							som handler om å lage en Android App som bruker vær dataen til Meteorologisk institutt. <br />
							I tillegg vant gruppen en <a href="">pris</a>.
							Mer info om prosjektet <a href="https://github.com/BaatBuddy/BaatBuddy" target="_blank" rel="noreferrer">her</a>.<br /><br />
						</div>

						<strong>Discord-bot</strong><br />
						<div>
							<p className="date-intervall">Teknologier: Python, MongoDB</p>
							En <a href="https://discord.com/" target="_blank" rel="noreferrer">Discord </a>bot jeg jobber på i fritiden. Følgende funksjoner:
							<ul>
								<li>
									visualisering av sorterings algoritmer
								</li>
								<li>
									et <a href="https://open.kattis.com/" target="_blank" rel="noreferrer">kattis </a> scoreboard
								</li>
								<li>
									et <a href="https://en.wikipedia.org/wiki/Incremental_game" target="_blank" rel="noreferrer"> incremental game </a> (WIP)
								</li>
								<li>
									og andre små Discord relaterte funksjoner
								</li>
							</ul>
							Mer info <a href="https://github.com/mariusfredrichsen/discordbot" target="_blank" rel="noreferrer">her</a>.
						</div>
						<br />
						<strong>Denne nettsiden</strong><br />
						<div>
							<p className="date-intervall">Teknologier: React, CSS, HTML, Nginx</p>
							En nettside laget med react rammeverket. Mer info <a href="https://github.com/mariusfredrichsen/website" target="_blank" rel="noreferrer">her</a>.
						</div>
					</p>

				</div>

				<div className="box-first">

					<h2>Annet</h2>

					<hr></hr>

					<p className="text-left">
						Førerkort – Klasse B automat<br />
						Språk – Norsk morsmål og Engelsk flytende
					</p>

				</div>

				<div className="box-first">
					<h2>Referanser</h2>

					<hr></hr>

					<p className="text-left">
						Oppgis ved forespørsel
					</p>

				</div>
			</div>
		</div >
	)
}

export default CV;