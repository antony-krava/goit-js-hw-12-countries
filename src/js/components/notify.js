import { error, defaultStack } from '@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/Material.css';
import '@pnotify/core/dist/BrightTheme.css';

function pnotifyError(string) {
    return error({
        title: string,
        text: 'Уточните запрос...',
        icon: true,
        hide: false,
        closer: true,
        sticker: false,
        destroy: true,
    });
}

function closeNotice() {
    return defaultStack.close();
}

export { pnotifyError, closeNotice };