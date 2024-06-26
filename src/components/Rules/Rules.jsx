import './Rules.css';
import Button from '../Button/Button'

const Rules = () => {
    const closeApp = () => {
        // Отправляем данные обратно в бота
        const data = {
            action: 'close',
            message: 'Спасибо, что ознакомились с правилами!'
        };

        window.Telegram.WebApp.sendData(JSON.stringify(data));
        // Закрываем веб-приложение
        window.Telegram.WebApp.close();
    };
    return (
        <div className="rules">
            <h3>Общие правила:</h3>
            <ul className="rules-list">
                <li>Заходя в клан, вы автоматически соглашаетесь со всеми нижеперечисленными правилами. Незнание не освобождает от ответственности.</li>
                <li>Правила чата не ограничены какими-либо ситуациями. Если вы сделали что-то неподобающее, и этого нет в правилах, это не значит, что вы правы.</li>
                <li>Правила могут изменяться и дополняться по усмотрению администрации.</li>
            </ul>

            <h3>Правила клана:</h3>
            <ol className="rules-list">
                <li>Всегда участвуйте в клановых событиях (включая копилку) и достигайте минимум 7 побед.</li>
                <li>Если у вас есть уважительная причина пропустить событие, заранее сообщите об этом руководителям клана.</li>
                <li>Проявляйте интерес к игре и сохраняйте активность вне клановых событий.</li>
                <li>Условия получения статуса ветерана:
                    <ul className="rules-list">
                        <li>Успешное участие в 3 мегакопилках.</li>
                        <li>Высокая активность в игре и в чате.</li>
                        <li>Отсутствие серьезных нарушений в рамках клана.</li>
                    </ul>
                </li>
            </ol>

            <h3>Правила чата:</h3>
            <ol className="rules-list">
                <li>Использование ненормативной лексики допустимо, но в разумных пределах.</li>
                <li>Контент 18+ допустим, но не злоупотребляйте (избегайте большого спама и излишне жестокого контента, включая расчлененку).</li>
                <li>Любая реклама запрещена.</li>
                <li>Замечания администратора обоснованы. Если есть вопросы, обращайтесь в личные сообщения.</li>
                <li>Флуд и спам сообщениями, стикерами и т.д. запрещены.</li>
                <li>Конфликты на межнациональной и межрасовой почве запрещены.</li>
                <li>Оскорбления соклановцев запрещены, за исключением шутливой формы, которая не должна переходить в серьезные оскорбления.</li>
                <li>Выпрашивание статуса ветерана запрещено. Если вы выполнили условия, просто напомните об этом.</li>
                <li>Провокация конфликтов запрещена.</li>
                <li>Кодовое слово: арбуз</li>
                <li>Адекватность участников оценивает администрация, и она имеет право исключить вас из клана без объяснения причин.</li>
                <li>Глава всегда прав. Замглавы всегда лев.</li>
            </ol>

            <h3>Наказания:</h3>
            <ul className="rules-list">
                <li>3 предупреждения ведут к исключению из клана или мута в чате.</li>
                <li>Нарушение правил серьезного характера (см. правила чата п.3, п.7, п.8 и п.10) сразу ведут к исключению.</li>
            </ul>
            <Button onClick={closeApp}>Я прочитал все правила, и дал согласие.</Button>
        </div>
    );
}

export default Rules;
