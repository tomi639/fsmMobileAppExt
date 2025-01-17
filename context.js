const context = (() => {
    const CONTEXT_URL = 'https://tomi639.github.io/fsmMobileAppExt//web-container-access-point';

    let mobileAppContext = undefined;

    function storeContext(context) {
        mobileAppContext = context;
    }

    function getContext() {
        return mobileAppContext;
    }

    async function fetchContext() {
        const response = await fetch(
            CONTEXT_URL,
            { method: 'POST' }
        );

        if (!response.ok) {
            document.getElementById('#error').innerHTML = `error: ${response.status}`;
        }

        return response.body;
    }

    return {
        storeContext,
        getContext,
        fetchContext
    }
})();