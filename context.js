const context = (() => {
    let mobileAppContext = undefined;

    function storeContext(context) {
        mobileAppContext = context;
    }

    function getContext() {
        return mobileAppContext;
    }

    return {
        storeContext,
        getContext
    }
})();