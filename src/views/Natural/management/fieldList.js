const fieldList =  {
    school: [
        { fieldname: "地址", field: "dz" },
        { fieldname: "学校名称", field: "xxjgmc", listFlag: true},
        { fieldname: "学校等级", field: "xxjgbxlxzl" },
        { fieldname: "教职工数", field: "jzgs" },
        { fieldname: "在校生数", field: "zxsrs" },
        { fieldname: "受灾距离", field: "distance" },
    ],
        gasStation: [
        { fieldname: "企业名称", field: "qymc", listFlag: true },
        { fieldname: "详细地址", field: "dz" },
        { fieldname: "企业类型", field: "qylx" },
        { fieldname: "等级划分", field: "djhf" },
        { fieldname: "总容积", field: "zrj" },
        { fieldname: "受灾距离", field: "distance" },
    ],
        hospital: [
        { fieldname: "医院名称", field: "ylwsjgmc", listFlag: true },
        { fieldname: "详细地址", field: "dz" },
        { fieldname: "医院等级", field: "yydj" },
        { fieldname: "在岗职工数 ", field: "zgzgrs" },
        { fieldname: "卫生技术人员总数", field: "wsjsryzs" },
        { fieldname: "注册护士数", field: "zchrs" },
        { fieldname: "受灾距离", field: "distance" },
    ],
        shelter: [
        { fieldname: "名称", field: "yjbncsmc", listFlag: true },
        { fieldname: "地址", field: "dz" },
        { fieldname: "应急避难场所建设类型", field: "yjbncsjslx" },
        { fieldname: "物资储备类型", field: "wzcblx" },
        { fieldname: "应急设施情况", field: "yjssqk" },
    ],
        reserve: [
        { fieldname: "储备库名称", field: "cbkmc", listFlag: true },
        { fieldname: "地址", field: "dz" },
        { fieldname: "储备库认定或主管部门", field: "cbkrdhzgbm" },
        { fieldname: "储备库等级", field: "cbkdj" },
        { fieldname: "储备库类型", field: "cbklx" },
    ]
}

module.exports = fieldList;
