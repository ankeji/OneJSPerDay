var a = {
    "success": true,
    "code": 0,
    "data": {
        "name": "深圳市腾讯信达有限合伙企业(有限合伙)",
        "detailList": [
            {
                "id": "1e2e3b58a12f9fedc693197a172c4bfc",
                "name": "信达资本管理有限公司",
                "level": 1,
                "label": "Company",
                "detailList": [
                    {
                        "id": "962f1060e04d83f88ba0f30adcf89e69",
                        "name": "信达投资有限公司",
                        "level": 2,
                        "label": "Company",
                        "percent": "60.00%",
                        "detailList": [
                            {
                                "id": "450a99aa3fb1de009733d92f366af8d5",
                                "name": "中国信达资产管理股份有限公司",
                                "level": 3,
                                "label": "Company",
                                "percent": "100.00%",
                                "detailList": [
                                    {
                                        "id": "24a8d511e73c43aa8ce74e274ad5e202",
                                        "name": "国务院",
                                        "level": 4,
                                        "label": "Person",
                                        "detailList": []
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "e6dc9f3dfa5975b179d6cab88fc89fa2",
                        "name": "深川市前海华建股权投资有限公司",
                        "level": 3,
                        "label": "Company",
                        "percent": "40.00%",
                        "detailList": []
                    }
                ]
            },
            {
                "id": "a582a4a96a576ff2c7029386cc48a697",
                "name": "深圳市腾讯产业投资基金有限公司",
                "level": 2,
                "label": "Company",
                "detailList": [
                    {
                        "id": "7709d4c1bab84d0da08badf4370273a1",
                        "name": "程芳",
                        "level": 3,
                        "label": "Person",
                        "percent": "25.00%",
                        "detailList": []
                    },
                    {
                        "id": "398b43662223410fb1507a48634a1618",
                        "name": "李月翠",
                        "level": 3,
                        "label": "Person",
                        "percent": "25.00%",
                        "detailList": []
                    },
                    {
                        "id": "b037d939ecc64adaa62a18f68b7e4911",
                        "name": "陈双华",
                        "level": 3,
                        "label": "Person",
                        "percent": "25.00%",
                        "detailList": []
                    },
                    {
                        "id": "c7f39c15fd2a4151b4c00036cd0179ad",
                        "name": "沈丹",
                        "level": 3,
                        "label": "Person",
                        "percent": "25.00%",
                        "detailList": []
                    }
                ]
            },
            {
                "id": "6ef3d0fd3686bdbe65b48f67d54a16dc",
                "name": "芜湖信石合力投资管理合伙企业(有限合伙)",
                "level": 3,
                "label": "Company",
                "detailList": [
                    {
                        "id": "1e2e3b58a12f9fedc693197a172c4bfc",
                        "name": "信达资本管理有限公司",
                        "level": 4,
                        "label": "Company",
                        "detailList": [
                            {
                                "id": "962f1060e04d83f88ba0f30adcf89e69",
                                "name": "信达投资有限公司",
                                "level": 5,
                                "label": "Company",
                                "percent": "60.00%",
                                "detailList": [
                                    {
                                        "id": "450a99aa3fb1de009733d92f366af8d5",
                                        "name": "中国信达资产管理股份有限公司",
                                        "level": 6,
                                        "label": "Company",
                                        "percent": "100.00%",
                                        "detailList": [
                                            {
                                                "id": "24a8d511e73c43aa8ce74e274ad5e202",
                                                "name": "国务院",
                                                "level": 7,
                                                "label": "Person",
                                                "detailList": []
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "e6dc9f3dfa5975b179d6cab88fc89fa2",
                                "name": "深川市前海华建股权投资有限公司",
                                "level": 6,
                                "label": "Company",
                                "percent": "40.00%",
                                "detailList": []
                            }
                        ]
                    },
                    {
                        "id": "962f1060e04d83f88ba0f30adcf89e69",
                        "name": "信达投资有限公司",
                        "level": 5,
                        "label": "Company",
                        "detailList": [
                            {
                                "id": "450a99aa3fb1de009733d92f366af8d5",
                                "name": "中国信达资产管理股份有限公司",
                                "level": 6,
                                "label": "Company",
                                "percent": "100.00%",
                                "detailList": [
                                    {
                                        "id": "24a8d511e73c43aa8ce74e274ad5e202",
                                        "name": "国务院",
                                        "level": 7,
                                        "label": "Person",
                                        "detailList": []
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "450a99aa3fb1de009733d92f366af8d5",
                        "name": "中国信达资产管理股份有限公司",
                        "level": 6,
                        "label": "Company",
                        "detailList": [
                            {
                                "id": "24a8d511e73c43aa8ce74e274ad5e202",
                                "name": "国务院",
                                "level": 7,
                                "label": "Person",
                                "detailList": []
                            }
                        ]
                    }
                ]
            },
            {
                "id": "f31570545ddd9e5d20e2467ced347481",
                "name": "深圳市腾讯博远科技有限公司",
                "level": 4,
                "label": "Company",
                "detailList": []
            }
        ]
    }
}
function jsonToArray(nodes) {
    var r=[];
    if (Array.isArray(nodes)) {
      for (var i=0, l=nodes.length; i<l; i++) {
        r.push(nodes[i]); // 取每项数据放入一个新数组
        if (Array.isArray(nodes[i]["detailList"])&&nodes[i]["detailList"].length>0)
          r = r.concat(jsonToArray(nodes[i]["detailList"]));
            delete nodes[i]["detailList"]
      }
    } 
    return r;
  }

  console.log(jsonToArray(a.data.detailList));