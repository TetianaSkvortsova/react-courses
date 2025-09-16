const cities = [
	{
		value:'VIN',
		city: 'Вінниця',
	},
	{
		value:'LUTS',
		city: 'Луцьк'
	},
	{
		value:'DNIP',
		city: 'Дніпро'
	},
	{
		value:'DON',
		city: 'Донецьк'
	},
	{
		value:'ZHIT',
		city: 'Житомир'
	},
	{
		value:'ZAP',
		city: 'Запоріжжя'
	},
	{
		value:'UZH',
		city: 'Ужгород'
	},
	{
		value:'IF',
		city: 'Івано-Франківськ'
	},
	{
		value:'KV',
		city: 'Київ'
	},
	{
		value:'KRP',
		city: 'Кропивницький'
	},
	{
		value:'LV',
		city: 'Львів'
	},
	{
		value:'MK',
		city: 'Миколаїв'
	},
	{
		value:'OD',
		city: 'Одеса'
	},
	{
		value:'PL',
		city: 'Полтава'
	},
	{
		value:'RV',
		city: 'Рівне'
	},
	{
		value:'SM',
		city: 'Суми'
	},
	{
		value:'TP',
		city: 'Тернопіль'
	},
	{
		value:'KHK',
		city: 'Харків'
	},
	{
		value:'KHR',
		city: 'Херсон'
	},
	{
		value:'KHM',
		city: 'Хмельницький'
	},
	{
		value:'CHRK',
		city: 'Черкаси'
	},
	{
		value:'CHRN',
		city: 'Чернігів'
	},
	{
		value:'CHRNV',
		city: 'Чернівці'
	},
]

const formOptions = {
	fullName: {
		caption: 'ПІБ',
		validateBy: /^[A-Z][a-z]{2,}\s[A-Z][a-z]{2,}/,
		validationMessage: 'Ім`я введено некоректно',
	},
	city: {
		caption: 'Місто',
		validateBy: /[^default]/,
		validationMessage: 'Оберіть місто',
	},
	storage: {
		caption: 'Склад',
		validateBy: /[^default]/,
		validationMessage: 'Оберіть склад',
	},
	payment: {
		caption: 'Оплата',
		validateBy: /[a-z]+/,
		validationMessage: 'Оберіть спосіб оплати',
	},
	amount: {
		caption: 'Кількість',
		validateBy: /[0-9]+/,
		validationMessage: 'Оберіть кількість',
	},
	comment: {
		caption: 'Коментар',
		validateBy: /.*/,
		validationMessage: '',
	}
}

const radioBtn = {
	overlay: 'Накладений платіж',
	account: 'Оплата на рахунок'
}