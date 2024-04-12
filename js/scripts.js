/* Description: Custom JS file */


(function($) {
    "use strict"; 
	
    /* Navbar Scripts */
    // jQuery to collapse the navbar on scroll
    $(window).on('scroll load', function() {
		if ($(".navbar").offset().top > 60) {
			$(".fixed-top").addClass("top-nav-collapse");
		} else {
			$(".fixed-top").removeClass("top-nav-collapse");
		}
    });
    
	// jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function() {
		$(document).on('click', 'a.page-scroll', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 600, 'easeInOutExpo');
			event.preventDefault();
		});
    });

    // offcanvas script from Bootstrap + added element to close menu on click in small viewport
    $('[data-toggle="offcanvas"], .navbar-nav li a:not(.dropdown-toggle').on('click', function () {
        $('.offcanvas-collapse').toggleClass('open')
    })

    // hover in desktop mode
    function toggleDropdown (e) {
        const _d = $(e.target).closest('.dropdown'),
            _m = $('.dropdown-menu', _d);
        setTimeout(function(){
            const shouldOpen = e.type !== 'click' && _d.is(':hover');
            _m.toggleClass('show', shouldOpen);
            _d.toggleClass('show', shouldOpen);
            $('[data-toggle="dropdown"]', _d).attr('aria-expanded', shouldOpen);
        }, e.type === 'mouseleave' ? 300 : 0);
    }
    $('body')
    .on('mouseenter mouseleave','.dropdown',toggleDropdown)
    .on('click', '.dropdown-menu a', toggleDropdown);


    /* Move Form Fields Label When User Types */
    // for input and textarea fields
    $("input, textarea").keyup(function(){
		if ($(this).val() != '') {
			$(this).addClass('notEmpty');
		} else {
			$(this).removeClass('notEmpty');
		}
	});
	

    /* Back To Top Button */
    // create the back to top button
    $('body').prepend('<a href="body" class="back-to-top page-scroll">Back to Top</a>');
    var amountScrolled = 700;
    $(window).scroll(function() {
        if ($(window).scrollTop() > amountScrolled) {
            $('a.back-to-top').fadeIn('500');
        } else {
            $('a.back-to-top').fadeOut('500');
        }
    });


	/* Removes Long Focus On Buttons */
	$(".button, a, button").mouseup(function() {
		$(this).blur();
	});

})(jQuery);


let lang = {
    en: {    
        name: 'Farhad Yuldashev',
        quote: '"Research is to see what everybody else has seen, and to think what nobody else has thought." - Albert Szent-Györgyi',
        home: 'Home',
        publications: 'Publications',
        patents: 'Patents',
        biography: 'Biography',
        biography_info: `Contains 11 scientific publications, the total content of 49 author's newspapers. Married, has 3 children. In his free time he enjoys golf, chess, football, basketball and Russian billiards.`,
        present: 'present',
        degree: `Master's Degree`,
        degree_info: 'Graduate school at BSTU V.G. Shukhova',
        company: 'Own diversified company',
        company_info: 'the basis of which is the production of building materials',
        bachelor: 'Bachelor Degree',
        bachelor_info: 'Tashkent State University. V.I. Lenin',
        accounts: 'Personal profiles and accounts',
        book_title: 'Tamerlane the Great',
        book_info: `A powerful account of the life of Tamerlane the Great (1336-1405), the last master nomadic power, one of history's most extreme tyrants ever, and the subject of Marlowe's play. Marozzi travelled in the footsteps of the great Mogul Emperor of Samarkland to write this wonderful combination of history and travelogue. The name of the last great warlord conjures up images of mystery and romance: medieval warfare on desert plains; the clash of swords on snow-clad mountains; the charge of elephants across the steppes of Asia; the legendary opulence and cruelty of the illiterate, chess-playing nemesis of Asia. He ranks alongside Alexander as one of the world's great conquerors, yet the details of his life are scarcely known in the West. He was not born to a distinguished family, nor did he find his`,
        download: 'Download',
        see_more: 'see more',
        publication1: 'PRINCIPLES OF SOLUTION OF ENVIRONMENTAL PROBLEMS THROUGH THE UTILIZATION OF TECHNOLOGICAL AND PRODUCTION WASTE',
        publication1_info: 'This thesis presents information about the formation of industrial and construction waste, the areas they occupy, as well as the results of research on effective methods for recycling industrial and...',
        publication2: 'IMPROVING THE EFFICIENCY OF RECYCLING MAN-MADE WASTE',
        publication2_info: 'This article raises the problem of recycling “red sludge” – this is the waste of aluminum production, which has accumulated in dumps around the world for millions of tons. The...',
        publication3: 'Efficient utilization of anthropogenic waste: a particular focus on phosphogypsum and ash slag',
        publication3_info: 'The focal point of this article resides in the pressing concern surrounding the mounting stockpiles of man-made waste, specifically phosphogypsum and ash slag, which have amassed in voluminous dumps across...',
        publication4: 'Phosphogypsum and ASH will help solve the problem of waste disposal from the chemical industry and thermal power engineering',
        publication4_info: 'The most appropriate solution to environmental and economic problems associated with the disposal of industrial waste is the creation of waste-free production. In this article, the solution to the environmental problem of recycling large-tonnage technogenic waste is shown using the',
        publication5: 'AN ADDITIVE FOR THE PRODUCTION OF CEMENT HIGH QUALITY',
        publication5_info: 'In this article we will talk about the methods of utilization of man-made waste and the production of an active synthesized additive "Opocophosphate", consisting of two main ingredients - phosphogypsum...',
        read_more: 'Read more', 
        patent1: 'Method of obtaining duolite',
        patent2: 'Nanoclay for growing plants on desert and fertile soils and a method for its production',
        patent3: 'Method for producing coal-alkali reagent',
        patent4: 'Active synthesized additive for cement and method for its preparation',
        patent5: 'Active mineral additive for cement and method of its preparation',
        patent6: 'Method for obtaining humic product',
        patent7: 'Raw material mixture and method for preparing active mineral additives for cement',
        patent8: 'Raw mixture for producing white cement',
        patent9: 'Mineral wool composition',
        patent10: 'Method of processing cotton meal',
        footer_emblem: 'Made by IFraganus IT Co. ALL RIGHT RESERVED.',
        birth: 'Birth',
        birth_info: 'Born on January 31, 1967 in the city of Tashkent.',
        career: 'Career',
        career_info: 'He began his career in 1984 as a mechanic at Woodworking Plant No. 2 (Tashkent).',
        army: 'Army',
        army_info: 'In 1985, the Mission was sent to the Soviet Army in the Far East in Khabarovsk. He served in a combined arms division in a security and escort company, was a squad commander, an excellent student in combat and military training, secretary of the Komsomol part of the organization, became a candidate member of the Communist Party, and for excellent service received a recommendation for admission to a university.',
        study_info: 'In 1987 he entered and in 1992 graduated from Tashkent State University. V.I. Lenin, majoring in the history of the countries of the Foreign East with in-depth study of Arabic and English. In the process of studying, excellent results undergo practical training as a translator at Amman University (Kingdom of Jordan, Amman).',
        work: 'Work',
        work_info: 'Since 1992, after graduating from university, he worked at the Tashkent Institute of Irrigation and Agricultural Mechanization in different countries, within the boundaries of the economic zone.',
        director: 'General Director',
        director_info: 'Since 1993, he worked as the general director of the Tamkhorlik charitable foundation.',
        business: 'Private Business',
        business_info: 'Since 1997, he has worked in various departments of private business (private flour mill, private broiler poultry farm).',
        representative: 'Representative of a French company',
        representative_info: 'Since 2000, general representative of a French company engaged in the production and sale of vitamin and mineral complexes for livestock and poultry farming.',
        company_description: 'In 2007, she created her own diversified company, the basis of which is the production of building materials. Farkhod Talazovich received 4 patents for the invention of cement and concrete, which improve the quality of products. None of them (Fofozol) has any analogues in the world. Patents have also been obtained for the production of humic mineral fertilizers. All inventions are registered both in Uzbekistan and in Russia.',
        master_info: `In 2016 he entered the Belgorod State Technical University named after V.G. Shukhov for a master's degree in the specialty of chemical technologist at the department of "Production of cement and composite materials." In 2018 he graduated from BSTU. V.G. Shukhov in contrast.`,
        master_info2: 'In 2019, he entered graduate school at BSTU named after. V.G. Shukhova.',
    },

    ru: {
        name: 'Фарход Юлдашев',
        quote:  '«Исследование — это видеть то, что видели все остальные, и думать так, как никто другой». - Альберт Сент-Дьёрдьи',
        home: 'Домой',
        publications: 'Публикации',
        patents: 'Патенты',
        biography: 'Биография',
        biography_info: `Имеет 11 научных публикаций общим объемом 49 авторских листов. Женат, имеет 3 детей. В свободное время увлекается гольфом, шахматами, футболом, баскетболом и русским бильярдом.`,
        present: 'настоящее время',
        degree: 'Степень магистра',
        degree_info: 'окончил БГТУ им. В.Г. Шухова с отличием',
        company: 'Собственная многопрофильная компания',
        company_info: 'основой которого является производство строительных материалов',
        bachelor: 'Степень бакалавра',
        bachelor_info: 'Ташкентский государственный университет. В.И. Ленин',
        accounts: 'Личные профили и аккаунты',
        book_title: 'Тамерлан Великий',
        book_info: 'Яркое повествование о жизни Тамерлана Великого (1336–1405), последнего хозяина кочевой державы, одного из самых жестоких тиранов в истории и героя пьесы Марло. Мароцци путешествовал по стопам великого могольского императора Самаркланда, чтобы написать это чудесное сочетание истории и путевых заметок. Имя последнего великого полководца вызывает в воображении образы тайн и романтики: средневековые войны на пустынных равнинах; звон мечей на заснеженных горах; атака слонов по степям Азии; легендарное богатство и жестокость неграмотного, играющего в шахматы врага Азии. Он считается наряду с Александром одним из величайших завоевателей мира, однако подробности его жизни почти не известны на Западе. Он не родился в знатной семье и не нашел своего',
        download: 'скачать',
        see_more: 'узнать больше',
        publication1: 'ПРИНЦИПЫ РЕШЕНИЯ ЭКОЛОГИЧЕСКИХ ПРОБЛЕМ ЧЕРЕЗ УТИЛИЗАЦИЯ ТЕХНОЛОГИЧЕСКИХ И ПРОИЗВОДСТВЕННЫХ ОТХОДОВ',
        publication1_info: 'В данной дипломной работе представлены сведения об образовании промышленных и строительных отходов, территориях, которые они занимают, а также результаты исследований по эффективным методам переработки промышленных и...',
        publication2: 'ПОВЫШЕНИЕ ЭФФЕКТИВНОСТИ ПЕРЕРАБОТКИ ТЕХНОГОРОДНЫХ ОТХОДОВ',
        publication2_info: 'В данной статье поднимается проблема переработки «красного шлама» – это отходов алюминиевого производства, миллионы тонн которых накопились на свалках по всему миру. ...',
        publication3: 'Эффективное использование антропогенных отходов: особое внимание фосфогипсу и золошлакам',
        publication3_info: 'В центре внимания этой статьи находится насущная проблема, связанная с растущими запасами искусственных отходов, в частности фосфогипса и золошлака, которые накопились в объемных свалках по всей территории...',
        publication4: 'Фосфогипс и АСШ помогут решить проблему утилизации отходов химической промышленности и теплоэнергетики',
        publication4_info: 'Наиболее целесообразным решением экологических и экономических проблем, связанных с утилизацией промышленных отходов, является создание безотходного производства. В данной статье показано решение экологической проблемы переработки крупнотоннажных техногенных отходов с помощью',
        publication5: 'ДОБАВКА ДЛЯ ПРОИЗВОДСТВА ЦЕМЕНТА ВЫСОКОГО КАЧЕСТВА',
        publication5_info: 'В этой статье мы поговорим о методах утилизации техногенных отходов и производстве активной синтезированной добавки «Опокофосфат», состоящей из двух основных ингредиентов - фосфогипса...',
        read_more: 'читать далее', 
        patent1: 'Способ получения дуолита',
        patent2: 'Наноглина для выращивания растений на пустынных и плодородных почвах и способ ее получения.',
        patent3: 'Способ получения углещелочного реагента',
        patent4: 'Активная синтезированная добавка для цемента и способ ее получения.',
        patent5: 'Активная минеральная добавка к цементу и способ ее приготовления.',
        patent6: 'Способ получения гуминового продукта',
        patent7: 'Сырьевая смесь и способ приготовления активной минеральной добавки для цемента.',
        patent8: 'Сырьевая смесь для производства белого цемента',
        patent9: 'Состав минеральной ваты',
        patent10: 'Способ переработки хлопкового шрота',
        footer_emblem: 'Сделано IFraganus IT Co. ВСЕ ПРАВА ЗАЩИЩЕНЫ.',
        birth: 'Рождение',
        birth_info: 'Родился 31 января 1967 г. в городе Ташкент.',
        career: 'Карьера',
        career_info: 'Трудовую деятельность начал в 1984 году слесарем Деревообрабатывающего завода № 2 (г. Ташкент).',
        army: 'Армия',
        army_info: ' В мае 1985 года был призван в Советскую Армию на Дальний Восток в г. Хабаровск. Службу проходил в общевойсковой дивизии в роте охраны и сопровождения, был командиром отделения, отличником боевой и политической подготовки, секретарем комсомольской организации части, стал кандидатом в члены коммунистической партии, за отличную службу получил рекомендацию в для поступления в ВУЗ. ',
        study_info: 'В 1987 году поступил, а 1992 году окончил Ташкентский государственный университет им. В. И. Ленина по специальности история стран Зарубежного Востока с углубленным изучением арабского и английского языка. В процессе обучения как отличник учебы проходил практику в качестве переводчика в Амманском Университете (Королевство Иордания, город Амман).',
        work: 'Работа',
        work_info: ' С 1992 года после окончания ВУЗа работал в Ташкентском институте ирригации и механизации сельского хозяйства на разных должностях, связанных с экономической деятельностью .',
        director: 'Генеральный директор',
        director_info: ' С 1993 года работал генеральным директором благотворительного фонда «Тамхорлик».',
        business: 'Частный бизнес',
        business_info: 'С 1997 года работал в различных сферах частного бизнеса (частный мукомольный комбинат, частная птицефабрика по выращиванию бройлерной птицы).',
        representative: 'Представитель французской компании',
        representative_info: ' С 2000 года генеральный представитель французской фирмы, занимающейся производством и реализацией витаминно-минеральных комплексов для животноводства и птицеводства.',
        company_description: 'С 2007 года создал свою компанию многоотраслевого бизнеса, основу которого составляет производство строительных материалов. Фарходом Талазовичем было получено 4 патента на изобретение добавок в цемент и бетон, улучшающих качество продукции. Одна из которых (Фофозол) не имеет аналогов в мире. Также были получены патенты на производство гуминовых минеральных удобрений. Все изобретения зарегистрированы как в Узбекистане, так и в России.',
        master_info: 'В 2016 году поступил в Белгородский государственный технический университет имени В.Г. Шухова в магистратуру по специальности химик-технолог на кафедру «Производство цемента и композиционных материалов». В 2018 году окончил БГТУ им. В.Г. Шухова с отличием.',
        master_info2: 'В 2019 году поступил в аспирантуру БГТУ им. В.Г. Шухова.',
    },

    
}
let selector = document.getElementById('language-selector');


function updateLanguage() {
    let language = selector.options[selector.selectedIndex].value;
    console.log(language);
    let nodes = document.querySelectorAll('[data-lang]');

    let i = nodes.length;

    while(i--){
        let key = nodes[i].getAttribute('data-lang');
        nodes[i].innerHTML = lang[language][key]
    }
}