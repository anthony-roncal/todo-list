export default function viewController() {
    (function init() {
        const header = document.createElement('header');
        const sidebar = document.createElement('div');
        const content = document.createElement('div');

        sidebar.classList.add('sidebar');
        content.classList.add('content');

        document.body.append(header, sidebar, content);
    })();

    return {
        
    }
};