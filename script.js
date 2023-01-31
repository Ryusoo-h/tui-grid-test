const data = [
    {
        category: '구두발표',
        year: '2020년',
        internationalDomestic: '국제',
        serialNumber: '1',
        academicConferenceName: '2020 한국디자인학회 가을 국제학술대회',
        hostCountry: '대한민국',
        holdingDay: '2020-11-13',
        hostOrganization: '한국디자인학회',
        titleOfThesisPresented: '한국과 루마니아의 공공보건시설 색채이미지 인식 비교 연구',
        totalNumberOfAuthors: '4',
        authors: '김혜영, 오지영, 이오아나, 박혜경',
    },
    {
        category: '구두발표',
        year: '2020년',
        internationalDomestic: '국제',
        serialNumber: '1',
        academicConferenceName: '2020 한국디자인학회 가을 국제학술대회',
        hostCountry: '대한민국',
        holdingDay: '2020/11/13',
        hostOrganization: '한국디자인학회',
        titleOfThesisPresented: '한국과 루마니아의 공공보건시설 색채이미지 인식 비교 연구',
        totalNumberOfAuthors: '4',
        authors: '김혜영, 오지영, 이오아나, 박혜경',
    },
    {
        category: '구두발표',
        year: '2020년',
        internationalDomestic: '국내',
        serialNumber: '1',
        academicConferenceName: '2020 한국디자인학회 가을 국제학술대회',
        hostCountry: '대한민국',
        holdingDay: '2020/11/13',
        hostOrganization: '한국디자인학회',
        titleOfThesisPresented: '한국과 루마니아의 공공보건시설 색채이미지 인식 비교 연구',
        totalNumberOfAuthors: '4',
        authors: '김혜영, 오지영, 이오아나, 박혜경',
    },
];

const columns = [
    {
        name: 'datepicker default',
        editor: 'datePicker'
    }
];
let Grid = new tui.Grid({
    el: document.getElementById('grid'),
    data: data,
    columns: [
    /* 데이터의 스키마에 해당하는 컬럼 모델을 정의 (방법1)
    * name: 필수 속성, 로우 데이터의 키
    * header: 선택 사항, 컬럼 헤더에서 사용됨
    * editor: 인풋 타입 결정. 5개 에디터가 있다. text, password, checkbox, radio, select 
    * 인풋타입 자세히 -> https://github.com/nhn/tui.grid/blob/master/packages/toast-ui.grid/docs/ko/custom-editor.md
    */
    {
        header: '구분',
        name: 'category',
        editor: 'text'
    },
    {
        header: '연도',
        name: 'year',
        editor: 'text'
    },
    {
        header: ' ',
        name: 'internationalDomestic', // 국제와 국내를 구분해서 적는걸 name뭐로하죠?
        formatter: 'listItemText',
        editor: {
            type: 'select',
            options: {
                listItems: [
                    { text: '국제', value: '국제' },
                    { text: '국내', value: '국내' }
                ]
            }
        }
    },
    {
        header: '연번',
        name: 'serialNumber',
        editor: 'text'
    },
    {
        header: '학술회의명',
        name: 'academicConferenceName',
        editor: 'text'
    },
    {
        header: '개최국가',
        name: 'hostCountry',
        editor: 'text'
    },
    {
        header: '개최일',
        name: 'holdingDay',
        editor: {
            type: 'datePicker',
            options: {
                format: 'yyyy년MM월dd일',
            }
        }
    },
    {
        header: '주관기관',
        name: 'hostOrganization',
        editor: 'text'
    },
    {
        header: '발표논문명',
        name: 'titleOfThesisPresented',
        editor: 'text'
    },
    {
        header: '총 저자수',
        name: 'totalNumberOfAuthors',
        editor: 'text'
    },
    {
        header: '저자',
        name: 'authors',
        editor: 'text'
    }
]
});

Grid.on('beforeChange', ev => {
    console.log('beforeChange : ', Grid.getData());
})
Grid.on('afterChange', ev => {
    console.log('afterChange : ', Grid.getData());
})

Grid.cancelEditing()

/**
 * 칼럼 모델 정의 방법2
 * grid.setColumns();
 */

