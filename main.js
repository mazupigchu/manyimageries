$(function () {
    var list = [
        {
            'content': [
                'The Eighth of September',
                'Pablo Neruda',
                'This day, Today, was a brimming glass.',
                'This day, Today, was an immense wave.',
                'This day was all the Earth.',
                'This day, the storm-driven ocean',
                'lifted us up in a kiss',
                'so exalted we trembled',
                'at the lightning flash',
                'and bound as one, fell,',
                'and drowned, without being unbound.',
                'This day our bodies grew',
                'stretched out to Earth’s limits,',
                'orbited there, melded there',
                'to one globe of wax, or a meteor’s flame.',
                'A strange door opened, between us,',
                'and someone, with no face as yet,',
                'waited for us there.',
            ],

        },
        {
            'content': [
                'Clenched Soul',
                'Pablo Neruda',
                'We have lost even this twilight.',
                'No one saw us this evening hand in hand',
                'while the blue night dropped on the world.',
                'I have seen from my window',
                'the fiesta of sunset in the distant mountain tops.',
                'Sometimes a piece of sun',
                'burned like a coin in my hand.',
                'I remember you with my soul clenched',
                'in that sadness of mine that you know.',
                'Where were you then ?',
                'Who else was there ?',
                'Saying what ?',
                'Why will the whole of love come to me suddenly',
                'when I am sad and feel you are far away ?',
                'The book fell that always closed at twilight',
                'and my blue sweater rolled like a hurt dog at my feet.',
                'Always, always you recede through the evenings',
                'toward the twilight erasing statues',
            ]
        },
        {
            'content': [
                'Love in Moonlight',
                'Louise Gluck',
                'Sometimes a man or woman forces his despair',
                'on another person, which is called',
                'baring the heart, alternatively, baring the soul-',
                'meaning for this moment they acquired souls-',
                'outside, a summer evening, a whole world',
                'thrown away on the moon: groups of silver forms',
                'which might be buildings or trees, the narrow garden',
                'where the cat hides, rolling on its back in the dust,',
                'the rose, the coreopsis, and, in the dark, the gold dome of the capitol',
                'converted to an alloy of moonlight, shape',
                'without detail, the myth, the archetype, the soul',
                'filled with fire that is moonlight really, taken',
                'from another source, and briefly',
                'shining as the moon shines: stone or not,',
                'the moon is still that much of a living thing.',
            ]
        },
        {
            'content': [
                'Children of July',
                'Hermann Hesse',
                'We children, born in July,',
                'Love the scent of the white jasmine,',
                'We wander along beside blooming gardens',
                'Silent and lost in deep dreams.',
                'Our brother is the scarlet poppy',
                'That burns in flickering shivers',
                `In the wheat-fields and upon the hot stone-walls;`,
                'Then the wind scatters its petals.',
                'Like a night in July, dream - laden, our life',
                'Wishes to complete its roundelay,',
                'Yielding to dreams and to fervent harvest festivals',
                'With wreaths of wheat and red poppies in hand.',
            ]
        }
    ]
    /* 图片字典存储数目 */
    var pngdata = [
        { "text": 'bodies', "value": '7' },
        { "text": 'book', "value": '4' },
        { "text": 'bound', "value": '4' },
        { "text": 'buildings', "value": '5' },
        { "text": 'cat', "value": '5' },
        { "text": 'children', "value": '6' },
        { "text": 'clenched', "value": '3' },
        { "text": 'coin', "value": '3' },
        { "text": 'coreopsis', "value": '3' },
        { "text": 'despair', "value": '5' },
        { "text": 'dog', "value": '4' },
        { "text": 'dome', "value": '4' },
        { "text": 'door', "value": '6' },
        { "text": 'dreams', "value": '5' },
        { "text": 'drowned', "value": '6' },
        { "text": 'dust', "value": '5' },
        { "text": 'evening', "value": '7' },
        { "text": 'evenings', "value": '7' },
        { "text": 'feet', "value": '5' },
        { "text": 'fell', "value": '6' },
        { "text": 'festivals', "value": '5' },
        { "text": 'fire', "value": '5' },
        { "text": 'flame', "value": '5' },
        { "text": 'flash', "value": '5' },
        { "text": 'garden', "value": '7' },
        { "text": 'gardens', "value": '7' },
        { "text": 'glass', "value": '7' },
        { "text": 'hand', "value": '6' },
        { "text": 'heart', "value": '4' },
        { "text": 'jasmine', "value": '5' },
        { "text": 'july', "value": '4' },
        { "text": 'kiss', "value": '6' },
        { "text": 'limits', "value": '5' },
        { "text": 'love', "value": '6' },
        { "text": 'melded', "value": '5' },
        { "text": 'moon', "value": '10' },
        { "text": 'moonlight', "value": '7' },
        { "text": 'mountain', "value": '5' },
        { "text": 'myth', "value": '5' },
        { "text": 'night', "value": '7' },
        { "text": 'ocean', "value": '7' },
        { "text": 'orbited', "value": '5' },
        { "text": 'petals', "value": '5' },
        { "text": 'poppy', "value": '5' },
        { "text": 'poppies', "value": '5' },
        { "text": 'rose', "value": '5' },
        { "text": 'roundelay', "value": '5' },
        { "text": 'shivers', "value": '3' },
        { "text": 'silver', "value": '5' },
        { "text": 'someone', "value": '5' },
        { "text": 'soul', "value": '5' },
        { "text": 'souls', "value": '5' },
        { "text": 'statues', "value": '5' },
        { "text": 'stone', "value": '4' },
        { "text": 'stonewalls', "value": '5' },
        { "text": 'sun', "value": '5' },
        { "text": 'sunset', "value": '6' },
        { "text": 'sweater', "value": '3' },
        { "text": 'trees', "value": '8' },
        { "text": 'twilight', "value": '6' },
        { "text": 'wave', "value": '6' },
        { "text": 'wax', "value": '5' },
        { "text": 'wheat', "value": '4' },
        { "text": 'wheatfields', "value": '5' },
        { "text": 'wind', "value": '5' },
        { "text": 'window', "value": '7' },
        { "text": 'wreaths', "value": '4' },
    ];
    function GetQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]); return null;
    }
    console.log(GetQueryString('txt'));
    var c = 1;
    if (GetQueryString('txt') == 'The Eighth of September') {
        c = 0;
    } else if (GetQueryString('txt') == 'Clenched Soul') {
        c = 1;
    } else if (GetQueryString('txt') == 'Love in Moonlight') {
        c = 2;
    } else if (GetQueryString('txt') == 'Children of July') {
        c = 3;
    }
    // var c = Math.floor((Math.random() * list.length));

    var article = list[c].content;
    var maindata = [];
    article.forEach((ele) => {
        var data = { 'text': ele.split(' ') };
        maindata.push(data)
    })
    console.log(maindata);
    /* 高亮显示的文本 */
    var suretxt = [
        {
            'data': ['2,6', '3,6', '5,6',
                '5,4', '6,5',
                '8,3', '9,1', '9,4'
                , '10,1', '11,3', '12,4'
                , '13,0', '13,2', '14,4', '14,8'
                , '15,2', '16,1'
            ]
        },
        {
            'data': ['2,5', '3,6', '4,3',
                '5,5', '6,3', '6,7',
                '7,4', '8,3', '8,6'
                , '14,5', '16,1', '16,7'
                , '17,3', '17,8', '17,11', '18,6'
                , '19,2', '19,4'
            ]
        },
        {
            'data': ['2,7', '4,2', '4,6',
                '6,3', '7,4', '8,3',
                '8,5', '8,8', '9,2', '9,10',
                '10,1', '10,3', '10,10', '11,5', '12,3',
                '13,2', '13,5', '15,3', '15,5', '16,1',
            ]
        },
        {
            'data': ['2,1', '2,4', '3,6',
                '4,5', '5,5', '6,5',
                '7,4', '8,2', '8,7', '9,2', '9,5', '10,2', '10,4',
                '11,4', '12,2', '12,7', '13,1', '13,3', '13,6',
            ]
        }
    ]
    var suredata = [];
    suretxt[c].data.forEach((ele, i) => {
        var txt1 = ele.split(',')[0]
        var txt2 = ele.split(',')[1]
        suredata.push(maindata[txt1].text[txt2])
    })
    console.log(suredata)
    /* 从0开始计算 */
    var list = 0;/* 第几行 */
    /* 从0开始计算 */
    var time = 0;/* 第几个单词 */
    var times;/* 当前的位置定时器 */
    var aimtxt = '';/* 当前读取的文本 */
    var rumtimes = 500;/* 默认的执行时间 */
    var pt = 0;/* 一次只能生成3张拼图 */
    var stop = false;/* 暂停按钮 */
    var isresult = false;/* 是否已经结束 */
    /* 修改执行时间 */
    function suretime(txt) {
        /* 包含以下符号，时间算800 */
        if (txt.indexOf(',') != -1 || txt.indexOf('.') != -1 || txt.indexOf('?') != -1) {
            rumtimes = 800
        } else {
            rumtimes = 500
        }
    }
    times = setInterval(function () {
        run()
        suretime(aimtxt)
    }, rumtimes)


    function run() {
        var html = ``;
        // console.log(maindata[list].text)
        maindata[list].text.forEach((ele, i) => {
            aimtxt = ele;
            if (i == time) {
                if (list == 0) {
                    html += `<span class='sure' style='font-family:"f2"'>${ele}</span>`
                } else {
                    html += `<span class='sure'>${ele}</span>`
                }


            } else {
                if (list == 0) {
                    html += `<span style='font-family:"f2"'>${ele}</span>`
                } else {
                    html += `<span>${ele}</span>`
                }

            }
        })
        /* 如果是最后一个单词 */
        if (time == maindata[list].text.length) {
            time = 0;/* 单词从0开始 */
            if (list == maindata.length - 1) {
                /* 如果是最后一行,最后一个单词停止 */
                clearInterval(times);
                times = '';
                $('.startbtn').hide();
                $('.resultbtn').show();
                stop = true;
            } else {
                list++;/* 单词从下一行开始 */
            }
        } else {
            time++;
        }

        $('#choosetxt').html(html);
        $('#choosetxt').css({ 'display': 'block' });
        // clearInterval(times);
        /* 如果当前是选定单词，停止计时器 */
        var aim = list + ',' + (time - 1);
        // console.log(suretxt[0]);
        // console.log(aim);
        /* 如果是选中的单词 */

        if (suretxt[c].data.indexOf(aim) != -1) {
            // console.log(suretxt[0].data)
            // console.log(aim)
            $('#choosetxt ').find('.sure').addClass('maintxt');
            console.log('ccccc')
            // 存在,停止计时器
            clearInterval(times);
            times = ''
            /* 5秒后继续运行 */
            setTimeout(function () {
                pt = 0;
                if (times == '' && stop == false) {
                    times = setInterval(function () {
                        run()
                        suretime(aimtxt)
                    }, rumtimes)
                }
            }, 5000)
        }
    }
    /* 继续 */
    $('#resume').on('click', function () {
        $('.twice.maindownlist ul').slideUp();
        clearInterval(times)
        times = '';
        stop = false;
        if (isresult == false) {
            times = setInterval(function () {
                run()
                suretime(aimtxt)
            }, rumtimes)
        }

        $('#choosetxt').removeClass('ugly');
        $('#resume').hide();
        $('#Add').show();
        $('#Pause').show();
    })
    /* 暂停 */
    $('#Pause').on('click', function () {
        stop = true;
        clearInterval(times);
        times = '';
        $('#choosetxt').addClass('ugly')
        $('#resume').show();
        $('#Add').hide();
        $('#Pause').hide();
    })
    $('#download').on('click', function () {
        download()
    })

    /* 点击下载图片 */
    function download() {
        var element = $("#centerbox")[0];
        html2canvas(element).then(function (canvas) {
            var myImage = canvas.toDataURL();
            downloadFile("the many imageries.png", myImage);
        });
    }
    function downloadFile(fileName, content) { //下载base64图片
        var base64ToBlob = function (code) {
            let parts = code.split(';base64,');
            let contentType = parts[0].split(':')[1];
            let raw = window.atob(parts[1]);
            let rawLength = raw.length;
            let uInt8Array = new Uint8Array(rawLength);
            for (let i = 0; i < rawLength; ++i) {
                uInt8Array[i] = raw.charCodeAt(i);
            }
            return new Blob([uInt8Array], {
                type: contentType
            });
        };
        let aLink = document.createElement('a');
        let blob = base64ToBlob(content); //new Blob([content]);
        let evt = document.createEvent("HTMLEvents");
        evt.initEvent("click", true, true); //initEvent 不加后两个参数在FF下会报错  事件类型，是否冒泡，是否阻止浏览器的默认行为
        aLink.download = fileName;
        aLink.href = URL.createObjectURL(blob);
        aLink.click();
    };
    /* 点击添加图片显示页面上 */
    $('#Add').on('click', function () {
        $('#download').show().css({ 'display': 'inline-block' });
        /* 不存在高亮文本禁止点击 */
        if ($('#choosetxt').find('.sure.maintxt').length == 0) {
        } else {
            /* 当前高亮的文本 */
            var suretxt = $('.sure.maintxt').html().replace(/[\ |\~|\`|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\-|\_|\+|\=|\||\\|\[|\]|\{|\}|\;|\:|\"|\'|\,|\<|\.|\>|\/|\?]/g, "");
            var pngurl = ' ';/* 存储图片路径 */
            console.log(suretxt);
            var suredata = pngdata.filter((ele) => {
                return ele.text.toLowerCase() == suretxt.toLowerCase()
            });
            /* 设定图片地址 */
            if (suretxt == 'evening' || suretxt == 'evenings') {
                pngurl = `./images/imagery/evening(s)`
            } else if (suretxt == 'statue' || suretxt == 'statues') {
                pngurl = `./images/imagery/statues`
            } else if (suretxt == 'garden' || suretxt == 'gardens') {
                pngurl = `./images/imagery/garden`
            } else if (suretxt == 'july' || suretxt == 'July') {
                pngurl = `./images/imagery/july`
            } else if (suretxt == 'dream' || suretxt == 'dreams') {
                pngurl = `./images/imagery/dreams`
            } else if (suretxt == 'wheatfields') {
                pngurl = `./images/imagery/wheat_fields`
            } else if (suretxt == 'stonewalls') {
                pngurl = `./images/imagery/stone_walls`
            } else if (suretxt == 'poppies') {
                pngurl = `./images/imagery/poppy`
            } else {
                pngurl = `./images/imagery/${suretxt}`
            }
            /* 存储图片路径的数组 */
            var showpng = [];
            console.log(suredata)
            for (var i = 1; i <= suredata[0].value; i++) {
                if (suretxt == 'evening' || suretxt == 'evenings') {
                    showpng.push(`evening${i}.jpg`)
                } else {
                    showpng.push(`${suretxt}${i}.jpg`)
                }
            }
            // if (showpng.length == 0 || pt == 3) {
            if (pt == 3) {
                /* 图片点完，或者3次用完 */
                console.log('图片用完')
                // return false;
            } else {
                pt++;/* 拼图显示次数 */
                // calculate the x,y coordinate of each PicCell
                var c = Math.floor((Math.random() * showpng.length));
                var pnghtml = '';/*  */
                var count = [];
                for (var i = 0; i < 3; i++) {
                    for (var m = 0; m < 4; m++) {
                        count.push({ x: i * -250, y: m * (-250) });
                    }
                }
                for (var i = 0; i < 12; i++) {

                    pnghtml += `<div class='box' style='position:absolute;left:${getRandom(-5, 100)}vw;top:${getRandom(-5, 100)}vh'>
            <div class='PicCell'  id='Pic${i}'>
            
            <img `
                    if (showpng[c] == 'gardens') {
                        pnghtml += `src = '${pngurl}/${showpng[c]}'`
                    } else {
                        pnghtml += `src = '${pngurl}/${showpng[c]}'`
                    }

                    pnghtml += ` style="margin-left:${count[i].y}px;margin-top:${count[i].x}px"/></div></div>`
                };
                $("#centerbox").append(`<div class='mainbox'>${pnghtml}</div>`);
                showpng.splice(c, 1);
            }
        }


    })


    function getRandom(start, end, fixed = 0) {
        let differ = end - start
        let random = Math.random()
        return (start + differ * random).toFixed(fixed)
    }




    /* 关闭about弹框显示隐藏 */
    $('#closeaboutbtn').on('click', function (e) {

        $('#fixedbox').fadeOut()
        e.preventDefault();
    })
    $('#aboutbtn').on('click', function (e) {
        $('#fixedbox').fadeIn();
        $('#Pause').click();/* 触发暂停 */
    })

    /* home页面右上角按钮 */
    $('#home .btnbox #downlist').on('click', function () {
        if ($('.btnbox .maindownlist ul').is(':hidden')) {
            stop = true;
            $(this).siblings('ul').slideDown();
            /* 同时暂停播放 */
            $('#Pause').click();/* 触发暂停 */
        } else {
            stop = false;
            $(this).siblings('ul').slideUp();
            $('#resume').click();/* 触发继续播放 */
        }

    })
})