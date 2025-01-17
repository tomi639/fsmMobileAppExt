//https://tomi639.github.io/fsmMobileAppExt/
(() => {
    async function bootstrap() {
        if (context.getContext()) {
            document.getElementById('#context').innerHTML = context.getContext();
        } else {
            context.storeContext(context.fetchContext());
        }
    }

    bootstrap();


})();