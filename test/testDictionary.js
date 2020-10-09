var testDictionary = [
    ["пожалуста", "пожалуйста"],
    ["ЗП","ЗП"], //*
    ["Беслан","Беслан"], //*
    ["бесликий", "безликий"],
    ["безпонтовый", "беспонтовый"],
    ["щита","щита"], //*
    ["щьта","что"],
    ["нехватает", "не хватает"],
    ["получицца", "получится"], //есть глагол в нф "получиться"
    ["щта","что"],
    ["хошь", "хочешь"],
    ["экстримал", "экстремал"],
    ["боченок", "бочонок"],
    ["хачу", "хачу"], // не изменяется из соображений толерантности
    ["енто", "это"],
    ["ету", "эту"],
    ["ета", "эта"],
    ["пасибо", "спасибо"],
    ["навичог", "новичок"],
    ["оччень", "очень"],
    ["прально", "правильно"],
    ["есле", "если"],
    ["хто", "кто"],
    ["фсё", "всё"],
    ["фсем", "всем"],
    ["фсех", "всех"],
    ["пешера", "пещера"],
    ["можт", "может"],
    ["пыво", "пиво"],
    ["адназначна", "однозначно"],
    ["никада", "никогда"],
    ["катенок", "котенок"], // при проверке е на ё не изменяется
    ["некада", "некогда"],
    ["мудератор", "модератор"],
    ["раён", "район"],
    ["передиваться", "переодеваться"],
    ["паздравляю", "поздравляю"],
    ["колекционер", "коллекционер"],
    ["инжинер", "инженер"],
    ["шампиньён", "шампиньон"],
    ["бутерброт", "бутерброд"],
    ["суецыд", "суицид"],
    ["компромитировать", "компрометировать"],
    ["инсцинировать", "инсценировать"],
    ["товарисч", "товарищ"],
    ["харрактерный", "характерный"],
    ["презнался", "признался"],
    ["деллема", "дилемма"],
    ["неподнилась", "не поднялась"],
    ["работаеццо", "работается"],
    ["по китайски", "по-китайски"],
    ["по испански", "по-испански"],
    ["темже", "тем же"],
    ["тех-же", "тех же"],
    ["такими-же", "такими же"],
    ["такихже", "таких же"],
    ["такиеже", "такие же"],
    ["серебреные", "серебряные"],
    ["серебреных", "серебряных"],
    ["серебреными", "серебряными"],
    ["удерать", "удирать"],
    ["одстрич", "отстричь"],
    ["вырубаеццо", "вырубается"],
    ["адресс", "адрес"],
    ["симантика", "семантика"],
    ["наприжение", "напряжение"],
    ["пилешь", "пилишь"],
    ["отреж", "отрежь"],
    ["атреж", "отрежь"],
    ["надреж", "надрежь"],
    ["серебреной", "серебряной"],
    ["етой", "этой"],
    ["етая", "эта"],
    ["серебреная", "серебряная"],
    ["серебреную", "серебряную"],
    ["гаусова", "гауссова"],
    ["задерать", "задирать"],
    ["такаяже", "такая же"],
    ["такуюже", "такую же"],
    ["разьем", "разъем"],
    ["в-порядке", "в порядке"],
    ["маяцо", "маяться"],
    ["откудо", "откуда"],
    ["убью","убью"], //*
    ["полагай","полагай"], //*
    ["пошведски", "по-шведски"],
    ["порумынски", "по-румынски"],
    ["разбилсо","разбился"],
    ["он бы разбилсо","он бы разбился"],
    ["неплатим", "не платим"],
    ["неплатит", "не платит"],
    ["неможет", "не может"],
    ["поитальянски", "по-итальянски"],
    ["такойже", "такой же"],
    ["такомуже", "такому же"],
    ["такимже", "таким же"],
    ["такомже", "таком же"],
    ["такогоже", "такого же"],
    //["чеголь",""],
    //["чемуль",""],
    ["какомута", "какому-то"],
    ["какимта", "каким-то"],
    ["какойта", "какой-то"],
    ["какаята", "какая-то"],
    ["пожалста", "пожалуйста"],
    ["грят","говорят"],
    ["когонить", "кого-нибудь"],
    ["комунить", "кому-нибудь"],
    ["кем-нить", "кем-нибудь"],
    ["ком-нить", "ком-нибудь"],
    ["чегонить", "чего-нибудь"],
    ["чему-нить", "чему-нибудь"],
    ["чем-нить", "чем-нибудь"],
    ["какой нибудь", "какой-нибудь"],
    ["какая нибудь", "какая-нибудь"],
    ["какого нибудь", "какого-нибудь"],
    ["каком нибудь", "каком-нибудь"],
    ["етим", "этим"],
    ["етот", "этот"],
    ["етому", "этому"],
    ["етом", "этом"],
    ["серебреный", "серебряный"],
    ["серебреному", "серебряному"],
    ["серебреном", "серебряном"],
    ["серебреным", "серебряным"],
    ["паранои", "паранойи"],
    ["параное", "паранойе"],
    ["параною", "паранойю"],
    ["параноей", "паранойей"],
    ["стелим","стелем"],
    ["бреим", "бреем"],
    ["дышем", "дышим"],
    ["видем", "видим"],
    ["вчасности", "в частности"],
    ["все-ж", "все ж"], //можно ё добавить
    ["всеж", "все ж"],
    ["по собачи", "по-собачьи"],
    ["надраца", "надраться"],
    ["подраца", "подраться"],
    ["предьявишь", "предъявишь"],
    ["предьявить", "предъявить"],
    ["юнная", "юная"],
    ["юнные", "юные"],
    ["ни очень", "не очень"],
    ["не очинь", "не очень"],
    ["неочень", "не очень"],
    ["нимножка", "немножко"],
    ["в принцыпе", "в принципе"],
    ["впринципе", "в принципе"],
    ["научицо", "научиться"],
    ["научицца", "научиться"],
    ["канечна", "конечна"], //Вселенная, возможно, конечна
    ["канечно","конечно"],
    ["мыцо","мыться"],
    ["мыцца", "мыться"],
    ["найдеца", "найдётся"],
    ["найдецца", "найдётся"],
    ["по украински", "по-украински"],
    ["поукраински", "по-украински"],
    ["знакомицца", "знакомиться"],
    ["знакомицо", "знакомиться"],
    ["лучши б", "лучше б"],
    ["лучшеб", "лучше б"],
    ["вобщем", "в общем"],
    ["в опщем", "в общем"],
    ["воопщем", "в общем"],
    ["немножка", "немножко"],
    ["не множка", "немножко"],
    ["теряиш", "теряешь"],
    ["теряеш", "теряешь"],
    ["теряишь", "теряешь"],
    ["пишышь", "пишешь"],
    ["пишиш", "пишешь"],
    ["убируться", "уберутся"],
    ["бируться", "берутся"],
    ["шкавчик", "шкафчик"],
    ["шкафчек", "шкафчик"],
    ["шкавчек", "шкафчик"],
    ["трахаюца", "трахаются"],
    ["креведка", "креветка"],
    ["смари", "смотри"],
    ["смаари", "смотри"],
    ["сопсно", "собственно"],
    ["собснаа", "собственно"],
    ["порусски", "по-русски"],
    ["беруться", "берутся"],
    ["какуюж", "какую ж"],
    ["какаяж", "какая ж"],
    ["какойж", "какой ж"],
    ["какую-ж", "какую ж"],
    ["какая-ж", "какая ж"],
    ["какой-ж", "какой ж"],
    ["скинишь", "скинешь"],
    ["кинишь", "кинешь"],
    ["потеряеш", "потеряешь"],
    ["остаеца", "остаётся"],
    ["остаёца", "остаётся"],
    ["маяцо", "маяться"],
    ["маяца", "маяться"],
    ["креведко", "креветка"],
    ["креветко", "креветка"],
    ["йа", "я"],
    ["толькочто", "только что"],
    ["только-что", "только что"],
    ["почти-что", "почти что"],
    ["почтичто", "почти что"],
    ["почти-што", "почти что"],
    ["почтишто", "почти что"],
    ["напишишь", "напишешь"],
    ["пишишь", "пишешь"],
    ["штото", "что-то"],
    ["што-то", "что-то"],
    ["трахаюццо", "трахаются"],
    ["ваапще", "вообще"],
    ["шкавчики", "шкафчики"],
    ["сьедал", "съедал"],
    ["сьедала", "съедала"],
    ["проэктирование", "проектирование"],
    ["проэктирования", "проектирования"],
    ["при проэктировании", "при проектировании"],
    ["чё-нибудь", "что-нибудь"],
    ["чо-нибудь", "что-нибудь"],
    ["че-нибудь", "что-нибудь"],
    ["чёнибудь", "что-нибудь"],
    ["чонибудь", "что-нибудь"],
    ["ченибудь", "что-нибудь"],
    ["че нибудь", "что-нибудь"],
    ["натюрморт", "натюрморт"], //*
    ["тюрме", "тюрьме"],
    ["ихними", "их"],
    ["девчюли", "девчули"],
    ["кажеться", "кажется"],
    ["по английски", "по-английски"],
    ["по русски", "по-русски"],
    ["харашо", "хорошо"],
    ["я была в этом рестаране", "я была в этом ресторане"],
    ["оподающей", "опадающей"],
    ["помоему", "по-моему"],
    ["девченки", "девчонки"],
    ["чиво", "чего"],
    ["подреж", "подрежь"],
    ["интерестная", "интересная"],
    ["беспонятия", "без понятия"],
    ["счас", "сейчас"],
    ["подругому","по-другому"], //два варианта, раздельно и с дефисом
    ["черезчур", "чересчур"],
    ["ничерта", "ни черта"],
    ["какбы", "как бы"],
    ["вкурсе", "в курсе"],
    ["поинтереснее", "поинтереснее"], //*
    ["кстате", "кстати"],
    ["гдето", "где-то"],
    ["собсно", "собственно"],
    ["вцелом", "в целом"],
    ["шо", "что"],
    ["ниче", "ничего"],
    ["типо", "типа"],
    ["теже", "те же"],
    ["чтоли", "что ли"],
    ["что - нибудь", "что-нибудь"],
    ["что нибудь", "что-нибудь"],
    ["ктото", "кто-то"],
    ["немогу", "не могу"],
    ["исправила", "исправила"], //*
    ["пол-четвертого", "полчетвертого"],
    ["пол-головы", "полголовы"],
    ["чё-нибудь", "что-нибудь"],
    ["чо-нть", "что-нибудь"],
    ["безстыжый", "бесстыжий"],
    ["пологается", "полагается"],
    ["предстоящий","предстоящий"],
    ["предстаящий","предстоящий"],
    ["пожже", "позже"],
    ["пожжа", "позже"],
    ["передел","передел"],
    ["попожжа", "попозже"],
    ["попожже", "попозже"],
    ["в-общем", "в общем"],
    ["боян", "баян"],
    ["будующ", "будущ"],
    ["будующее", "будущее"],
    ["зделать", "сделать"],
    ["зжёг", "сжёг"],
    ["здесь", "здесь"], //*
    ["здание", "здание"],
    ["здоровье", "здоровье"],
    ["извени", "извини"],
    ["лутше", "лучше"],
    ["покласть", "положить"],
    ["поможеш", "поможешь"],
    ["симпотичный", "симпатичный"],
    ["спосибо", "спасибо"],
    ["беспелотник", "беспилотник"],
    ["брошуру", "брошюру"],
    ["венчестер", "винчестер"],
    ["вмистимости", "вместимости"],
    ["во-первых", "во-первых"], //*
    ["вобще", "вообще"],
    ["впорядке","в порядке"],
    ["всё впорядке","всё в порядке"],
    ["все впорядке","все в порядке"],
    ["возврощения", "возвращения"],
    ["вообщем", "в общем"],
    ["встречаеться", "встречается"],
    ["всётаки", "всё-таки"],
    ["втечение", "в течение"],
    ["в-течение", "в течение"],
    ["втечении", "в течение"],
    ["выгледиш", "выглядишь"],
    ["вырощенный", "выращенный"],
    ["высыпатся", "высыпаться"],
    ["галавная", "головная"],
    ["гаус", "гаусс"],
    ["граммотность", "грамотность"],
    ["грусно", "грустно"],
    ["девчёнка", "девчонка"],
    ["докочать", "докачать"], //докучать
    ["евошний", "его"],
    ["жолудя", "жёлудя"],
    ["из за", "из-за"],
    ["из под", "из-под"],
    ["илиминтарно", "элементарно"],
    ["интерестно", "интересно"],
    ["ихний", "их"],
    ["инфецированы","инфицированы"],
    ["какую нибудь", "какую-нибудь"],
    ["ключём", "ключом"],
    ["конешно", "конечно"],
    ["копрал", "капрал"],
    ["коректно", "корректно"],
    ["кочать", "качать"],
    ["курсавой", "курсовой"],
    ["курсавую", "курсовую"],
    ["ленность", "леность"],
    ["лесничных", "лестничных"],
    ["ложить", "класть"],
    ["лутше", "лучше"],
    ["манеты", "монеты"],
    ["металы", "металлы"],
    ["мылостыню", "милостыню"],
    ["нарушаеться", "нарушается"],
    ["не кочается", "не качается"],
    ["недай", "не дай"],
    ["неначем", "не на чем"],
    ["неработает", "не работает"],
    ["обьидение","объедение"],
    ["сьеденного","съеденного"],
    ["обьиденские колбаски","объеденские колбаски"],
    ["несможеш", "не сможешь"],
    ["нилюблю", "не люблю"],
    ["обьедениться", "объединиться"],
    ["одевалася", "одевалась"],
    ["однокласницами", "одноклассницами"],
    ["оксиморон", "оксюморон"],
    ["опаздал", "опоздал"],
    ["оторвуться", "оторвутся"],
    ["пинял","пенял"],
    ["погаловная", "поголовная"],
    ["подошол", "подошёл"],
    ["пол часа", "полчаса"],
    ["пол-часа", "полчаса"],
    ["потеряеш","потеряешь"],
    ["пользуеться", "пользуется"],
    ["получем","получим"],
    ["попробывать", "попробовать"],
    ["посмотриш", "посмотришь"],
    ["проблемм", "проблем"],
    ["предстовления","представления"],
    ["пропоганду", "пропаганду"],
    ["работаеться", "работается"],
    ["разочерования", "разочарования"],
    ["редов", "рядов"],
    ["рецедив", "рецидив"],
    ["россолом", "рассолом"],
    ["скока", "сколько"],
    ["смотрем", "смотрим"],
    ["собиралася", "собиралась"],
    ["сотоне", "сатане"],
    ["сохронять", "сохранять"],
    ["спасиба", "спасибо"],
    ["техничесткие","технические"],
    ["техничесткие сложности","технические сложности"],
    ["умерает", "умирает"],
    ["умывалася", "умывалась"],
    //["холявный", ""],
    ["хотит", "хочет"],
    ["хочете", "хотите"],
    ["чтоже", "что же"],
    ["чтонибудь", "что-нибудь"],
    ["школьнецы", "школьницы"],
    ["щелкаеш", "щелкаешь"],
    ["авторезировать", "авторизировать"],
    ["щелчек", "щелчок"],
    ["обьясняю", "объясняю"],
    ["мощьный", "мощный"],
    ["зарегестрировался", "зарегистрировался"],
    ["чорную", "чёрную"],
    ["по-диагонале", "по диагонали"],
    ["безстрашно", "бесстрашно"],
    ["пружына", "пружина"],
    ["сниметься", "снимется"],
    ["неполучится", "не получится"],
    ["новичек", "новичок"],
    ["потеряеш", "потеряешь"],
    ["трахаюццо", "трахаются"],
    ["новечку", "новичку"],
    ["на едине", "наедине"],
    ["поченить", "починить"],
    ["когото", "кого-то"],
    ["неволнуюсь", "не волнуюсь"],
    ["драмотично", "драматично"],
    ["найдеш", "найдёшь"],
    ["борохло", "барахло"],
    ["продливать", "продлевать"],
    ["секреторя", "секретаря"],
    ["извесность", "известность"],
    ["мне нескем", "мне не с кем"],
    ["тогоже","того же"],
    ["любовацца", "любоваться"],
    ["воллейбол", "волейбол"],
    ["какоенить", "какое-нибудь"],
    ["тогоже", "того же"],
    ["все впорядке", "все в порядке"],
    ["сьесть", "съесть"],
    ["по-быстрей", "побыстрей"],
    ["видители", "видите ли"],
    ["расслабся", "расслабься"],
    ["приминить", "применить"],
    ["по-немножку","понемножку"],
    ["по-плечу", "по плечу"],
    ["пересикаются", "пересекаются"],
    ["гарячем", "горячем"],
    ["маштаб", "масштаб"],
    ["кого-угодно", "кого угодно"],
    ["ниодного", "ни одного"],
    ["увидить", "увидеть"],
    ["логорифм", "логарифм"],
    ["все-ещё", "все ещё"],
    ["убъю", "убью"],
    ["неожидал", "не ожидал"],
    ["такшто", "так что"],
    ["так-что", "так что"],
    ["патамушта", "потому что"],
    ["кудато", "куда-то"],
    ["фудболке", "футболке"],
    ["сожелению", "сожалению"],
    ["скинишь","скинешь"],
    ["подстрич", "подстричь"],
    ["делаеца", "делается"],
    ["менше", "меньше"],
    ["пятници", "пятницы"],
    ["по деревенски", "по-деревенски"],
    ["модератером", "модератором"],
    ["ниодна", "ни одна"],
    ["паучек", "паучок"],
    ["какомто", "каком-то"],
    ["чотко", "чётко"],
    ["неимею", "не имею"],
    ["разбудиш", "разбудишь"],
    ["гостиприимные", "гостеприимные"],
    ["распологайся", "располагайся"],
    ["циллиндрической", "цилиндрической"],
    ["отмаштабировали", "отмасштабировали"],
    ["вообщемто", "в общем-то"],
    ["карабль", "корабль"],
    ["откудо", "откуда"],
    ["непрестегнутый", "непристегнутый"],
    ["еще", "ещё"], //исправляется, так как часто встречается
    ["ее", "её"], //исправляется, так как часто встречается
    /*
    ["полчетвертого", "полчетвёртого"],
    ["щелкаешь", "щёлкаешь"],
    ["непристегнутый", "непристёгнутый"],
    ["веселая", "весёлая"],
    ["котенок", "котёнок"],
    ["учетка", "учётка"],
    ["учетку", "учётку"],
    ["семьей", "семьёй"],
    ["дает", "даёт"],
    ["самолета", "самолёта"],
    ["придется", "придётся"],
    ["запрещен", "запрещён"],
    ["емкое", "ёмкое"],
    ["серьезно", "серьёзно"],
    ["клен", "клён"],
    ["нашел", "нашёл"],
    ["семерка", "семёрка"],
    ["попьем", "попьём"],
    ["обертки", "обёртки"],
    ["пришел", "пришёл"],
    ["теплым", "тёплым"],
    ["елочка", "ёлочка"],
    ["веселого", "весёлого"],
    ["восьмерка", "восьмёрка"],
    ["твердого", "твёрдого"],
    ["твердое", "твёрдое"],
    ["путевку", "путёвку"],
    ["счет", "счёт"],
    ["Артем", "Артём"],
    ["дешевый", "дешёвый"],
    ["самолетов", "самолётов"],
    ["объемная", "объёмная"],
    ["ребенка", "ребёнка"],
    ["березовыми", "берёзовыми"],
    ["ученые", "учёные"],
    ["перелетных", "перелётных"],
    ["четырех", "четырёх"],
    ["увлеченные", "увлечённые"],
    ["сдает", "сдаёт"],
    ["придется", "придётся"],
    ["остается", "остаётся"],
    ["трехмерной", "трёхмерной"],
    ["ушел", "ушёл"],
    ["рвет", "рвёт"],
    ["мое", "моё"],
    ["чье", "чьё"],
    ["ждет", "ждёт"],
    ["веселых", "весёлых"],
    */
	["кунскамеру","кунсткамеру"],
	["кунскамеру со всякими уродами","кунсткамеру со всякими уродами"],
	["подрятчиков","подрядчиков"],
	["цыстерны","цистерны"],
	["по-шустрее","пошустрее"],
	["по-шустрее будет","пошустрее будет"],
	["обезъяны","обезьяны"],
	["пере-проданного","перепроданного"],
	["русска-язычьная","русскоязычная"],
	["русско-язычная версия","русскоязычная версия"],
	["русска-язычьная версия","русскоязычная версия"],
	["благочистивого","благочестивого"],
	["по-умолчанию","по умолчанию"],
	["обьявили","объявили"],

    /*
      ["",""],
      ["",""],
      ["",""],
      ["",""],
      ["",""],
    */

    //   "//*" - слова, которые не должны исправляться
];

module.exports.testDictionary = testDictionary;
