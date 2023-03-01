<footer class={styles.footerDistributed}>
	<div class={styles.footerLeft}>
		<div class={styles.titleWrapper}>
			<Image src="/favicon.svg" alt="Picture of the author" width={100} height={100} />{" "}
			<h3>
				{companyInfo.name}
				{/* <span>logo</span> */}
			</h3>
		</div>
		<p class={styles.footerLinks}>
			<a href="#" class={styles.link1}>
				Home
			</a>

			<a href="#">Blog</a>

			<a href="#">Pricing</a>

			<a href="#">About</a>

			<a href="#">Faq</a>

			<a href="#">Contact</a>
		</p>
		<p class={styles.footerCompanyName}>{companyInfo.name} © 2023</p>
	</div>

	<div class={styles.footerCenter}>
		<div>
			<i class="fa fa-map-marker"></i>
			<p>
				<span> {companyInfo.address.address} </span> {companyInfo.address.area},{" "}
				{companyInfo.address.city}
			</p>
		</div>

		<div>
			<i class="fa fa-phone"></i>
			<p>{companyInfo.phone}</p>
		</div>

		<div>
			<i class="fa fa-envelope"></i>
			<p>
				<a href="mailto:support@company.com">support@company.com</a>
			</p>
		</div>
	</div>

	<div class={styles.footerRight}>
		<p class={styles.footerCompanyAbout}>
			<span>About the company</span>
			Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu
			auctor lacus vehicula sit amet.
		</p>

		<div class={styles.footerIcons}>
			<a href="#">
				<i class="fa fa-facebook"></i>
			</a>
			<a href="#">
				<i class="fa fa-twitter"></i>
			</a>
			<a href="#">
				<i class="fa fa-linkedin"></i>
			</a>
			<a href="#">
				<i class="fa fa-github"></i>
			</a>
		</div>
	</div>
</footer>;
