# OpenID Connect Single Button

A Liferay Fragment to configure and display and single "Sign in" button to an OpenId Connect Provider.

![demo](https://github.com/lgdd/doc-assets/blob/main/openid-connect-single-button/liferay-oidc-single-button-fragment.gif?raw=true)

## Example

You enable OpenID Connect (OIDC) and add a provider under `Instance Settings > SSO > OpenID Connect Provider`.
Now the default login display a link to `OpenID Connect` redirecting you to a form where you can choose an OpenID Connect Provider and sign in with it.

With this fragment, you can give to end users a single button to sign in to an OIDC Provider (e.g. `Sign in with GitHub`).

## How to import into Liferay

Run `npm run import` and follow instructions or `npm run compress` to create a zip file and import from Liferay UI.

## Notes

This project has been created with [generator-liferay-fragments][1]. You can read
how to manage this project in the [generator documentation][2].

[1]: https://www.npmjs.com/package/generator-liferay-fragments
[2]: https://www.npmjs.com/package/generator-liferay-fragments#usage

## License

[MIT](LICENSE)
