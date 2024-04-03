const form = fragmentElement.querySelector("#_com_liferay_login_web_portlet_LoginPortlet_fm");
const submitBtn = fragmentElement.querySelector("#_com_liferay_login_web_portlet_LoginPortlet_submit");
const inputFormDate = fragmentElement.querySelector("#_com_liferay_login_web_portlet_LoginPortlet_formDate");
const inputOAuthClientEntryId = fragmentElement.querySelector("#_com_liferay_login_web_portlet_LoginPortlet_oAuthClientEntryId");
const userMenu = fragmentElement.querySelector("div.user-menu");
const configurationHelper = fragmentElement.querySelector(".alert.alert-info");
const configurationHelperList = fragmentElement.querySelector(".alert.alert-info ul");
const isInEditionMode = document.querySelector("body").classList.contains("has-edit-mode-menu") || document.querySelector("body").classList.contains("portal-popup");

inputOAuthClientEntryId.value = configuration.oAuthClientEntryId;

inputFormDate.value = new Date().getTime();

submitBtn.onclick = function () {
	form.submit();
}

if (isInEditionMode) {
	fetchOAuthClientEntries();
	form.classList.remove("hide");
	userMenu.classList.remove("hide");
	configurationHelper.classList.remove("hide");
} else {
	if (Liferay.ThemeDisplay.isSignedIn()) {
		form.classList.add("hide");
		userMenu.classList.remove("hide");
	} else {
		form.classList.remove("hide");
		userMenu.classList.add("hide");
	}
}

function fetchOAuthClientEntries() {
	const payload = {
		companyId: Liferay.ThemeDisplay.getCompanyId(),
		authServerWellKnownURISuffix: 'openid-configuration'
	};

	Liferay.Service('/oauthclient.oauthcliententry/get-auth-server-well-known-uri-suffix-o-auth-client-entries', payload, function (list) {
		for (let i = 0; i < list.length; i++) {
			const infoJson = JSON.parse(list[i].infoJSON);
			const clientName = infoJson.client_name;
			const id = list[i].OAuthClientEntryId;
			let li = document.createElement('li');
			li.innerHTML = clientName + " (id=" + id + ")";
			configurationHelperList.appendChild(li);
		}
	});
}