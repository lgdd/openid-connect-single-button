const form = fragmentElement.querySelector("#_com_liferay_login_web_portlet_LoginPortlet_fm");
const submitBtn = fragmentElement.querySelector("#_com_liferay_login_web_portlet_LoginPortlet_submit");
const inputFormDate = fragmentElement.querySelector("#_com_liferay_login_web_portlet_LoginPortlet_formDate");
const inputOIDCProviderName = fragmentElement.querySelector("#_com_liferay_login_web_portlet_LoginPortlet_OPEN_ID_CONNECT_PROVIDER_NAME");
const userMenu = fragmentElement.querySelector("div.user-menu");
const isNotInEditionMode = !document.querySelector("body").classList.contains("company-site") && !document.querySelector("body").classList.contains("has-edit-mode-menu");

inputFormDate.value = new Date().getTime();
inputOIDCProviderName.value = configuration.oidcProviderName;

submitBtn.onclick = function() {
  form.submit();
}

if(isNotInEditionMode) {
	if(Liferay.ThemeDisplay.isSignedIn()) {
		form.classList.add("hide");
		userMenu.classList.remove("hide");
	} else {
		form.classList.remove("hide");
		userMenu.classList.add("hide");
	}
} else {
	form.classList.remove("hide");
	userMenu.classList.remove("hide");
}
