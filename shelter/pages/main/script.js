const burgerButton = document.getElementsByClassName('burger')[0];
const burgerMenu = document.getElementsByClassName('burger__menu')[0];

const overlay = document.getElementsByClassName('overlay_active')[0];
overlay.addEventListener('click', () => {
	burgerClick();
});

burgerButton.addEventListener('click', () => {
	burgerClick();
});

let burgerMenuFlag = true;

function burgerClick() {
	if (burgerMenuFlag) {
		burgerMenu.style.display = 'flex';
		burgerMenuFlag = false;
		document.body.style.overflowY = 'hidden';
		document.body.style.overflowX = 'hidden';
		overlay.style.display = 'block';
		burgerButton.classList.add('burger--click');
		burgerButton.classList.remove('burger--prev-click');
		burgerMenu.classList.add('burger__menu--open');
		burgerMenu.classList.remove('burger__menu--close');
	} else {
		burgerMenuFlag = true;
		document.body.style.overflowY = 'auto';
		burgerButton.classList.add('burger--prev-click');
		burgerMenu.classList.add('burger__menu--close');
		burgerMenu.classList.remove('burger__menu--open');
	}
}

/*<div class="pets__slider">

			<div class="slider__left"></div>

					<div class="pet__card">
							<img
								src="../../assets/images/pets-katrine.png"
								alt="pets-katrine"
							/>
							<p class="pet__card__title">Katrine</p>
							<button class="pets__button">Learn more</button>
					</div>

					<div class="pet__card pet__item2">
							<img
								src="../../assets/images/pets-jennifer.png"
								alt="pets-katrine"
							/>
							<p class="pet__card__title">Jennifer</p>
							<button class="pets__button">Learn more</button>
						</div>

						<div class="pet__card pet__item3">
							<img
								src="../../assets/images/pets-woody.png"
								alt="pets-katrine"
							/>
							<p class="pet__card__title">Woody</p>
							<button class="pets__button">Learn more</button>
						</div>

				<div class="slider__right"></div>

		</div>*/
