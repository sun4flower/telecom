<template>
    <div>

        <el-form :inline="true" class="demo-form-inline">
            <el-form-item label="用户姓名">
                <el-input v-model="newform.name"></el-input>
            </el-form-item>
            <el-form-item label="用户手机号">
                <el-input v-model="newform.phone"></el-input>
            </el-form-item>
            <el-form-item label="用户邮箱">
                <el-input v-model="newform.emial"></el-input>
            </el-form-item>
            <el-form-item label="员工编号">
                <el-input v-model="newform.code"></el-input>
            </el-form-item>
            <el-form-item label="身份证号">
                <el-input v-model="newform.id"></el-input>
            </el-form-item>
            <el-form-item label="归属组织">
                <el-popover placement="bottom" width="400" trigger="click" v-model="boolean" @after-enter="getInfors()">
                    <el-container direction="vertical">
                        <el-form>
                            <el-form-item label="组织名称">
                                <div class="pop">
                                    <el-input v-model="newform.groupItemA"></el-input>
                                    <el-button v-on:click="groupItem=newform.groupItemA">查询</el-button>
                                </div>
                            </el-form-item>
                        </el-form>
                        <el-table :data="getName()(groupItem)" ref="singleTable" @current-change="handleCurrentChange" height="300px" v-loading="flag">
                            <el-table-column width="50" type="index" label="序号">
                            </el-table-column>
                            <el-table-column width="160" label="组织名称">
                                <template slot-scope="scope">{{ scope.row.ORGNAME}}</template>
                            </el-table-column>
                            <el-table-column width="160" label="上级组织">
                                <template slot-scope="scope">{{ scope.row.FORGNAME}}</template>
                            </el-table-column>
                        </el-table>
                    </el-container>

                    <el-input v-model="newform.organization" slot="reference">
                        <i slot="suffix" class="el-input__icon el-icon-arrow-down"></i>
                    </el-input>
                </el-popover>
            </el-form-item>
            <el-button type="primary" >查询</el-button>
        </el-form>
        <el-row lot-scope="scope">

            <el-dialog title="基本信息" :visible.sync="dialogFormVisible" class="dialog">
                <el-form :model="form" :inline="true">
                    <el-form-item label="员工姓名" :label-width="formLabelWidth">
                        <el-input v-model="form.name" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="邮箱" :label-width="formLabelWidth">
                        <el-input v-model="form.email" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="证件类型" :label-width="formLabelWidth">
                        <el-select v-model="form.idType" placeholder="请选择证件类型">
                            <el-option label="身份证" value="身份证"></el-option>
                            <el-option label="护照" value="护照"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="证件号码" :label-width="formLabelWidth">
                        <el-input v-model="form.id" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="人员状态" :label-width="formLabelWidth">
                        <el-select v-model="form.status" placeholder="请选择人员状态">
                            <el-option label="在职" value="在职"></el-option>
                            <el-option label="离职" value="离职"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="手机号码" :label-width="formLabelWidth">
                        <el-input v-model="form.phone" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="员工编号" :label-width="formLabelWidth">
                        <el-input v-model="form.code" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="组织归属" :label-width="formLabelWidth">
                        <el-select v-model="form.organization" placeholder="请选择组织归属">
                            <el-option label="IT共享中心" value="IT共享中心"></el-option>
                            <el-option label="工程维护部" value="工程维护部"></el-option>
                            <el-option label="人事行政部" value="人事行政部"></el-option>
                            <el-option label="企业行销" value="企业行销"></el-option>
                            <el-option label="专网事业部" value="专网事业部"></el-option>
                            <el-option label="资产管理部" value="资产管理部"></el-option>
                        </el-select>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">取 消</el-button>
                    <el-button type="primary" @click="addMember()">确 定</el-button>
                </div>
            </el-dialog>
            <el-button icon="el-icon-plus" circle @click="dialogFormVisible = true"></el-button>
            <el-button type="primary" icon="el-icon-edit" circle @click="updateInfor()"></el-button>
            <el-button type="danger" icon="el-icon-delete" circle @click="delate()"></el-button>
        </el-row>
        <el-table ref="multipleTable" :data="newInfor" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange" v-loading="inforFlag">
            <el-table-column type="selection" width="55">
            </el-table-column>
            <el-table-column label="姓名" width="120">
                <template slot-scope="scope">{{ scope.row.name}}</template>
            </el-table-column>
            <el-table-column label="员工Id" width="120">
                <template slot-scope="scope">{{ scope.row.id}}</template>
            </el-table-column>
            <el-table-column label="员工编号">
                <template slot-scope="scope">{{ scope.row.code}}</template>
            </el-table-column>
            <el-table-column label="手机号">
                <template slot-scope="scope">{{ scope.row.phone}}</template>
            </el-table-column>
            <el-table-column label="邮箱">
                <template slot-scope="scope">{{ scope.row.email}}</template>
            </el-table-column>
            <el-table-column label="归属组织">
                <template slot-scope="scope">{{ scope.row.organization.name}}</template>
            </el-table-column>
            <el-table-column label="权限">
                <template slot-scope="scope">{{ scope.row.limit}}</template>
            </el-table-column>
            <el-table-column label="上级组织">
                <template slot-scope="scope">{{ scope.row.organization.prev}}</template>
            </el-table-column>
            <el-table-column label="创建时间">
                <template slot-scope="scope">{{ scope.row.time}}</template>
            </el-table-column>
        </el-table>
        <el-pagination background layout="prev, pager, next" :page-size="pageSize" @current-change="pageChange" :total="infor.length">
        </el-pagination>
        <Dialog></Dialog>
    </div>

</template>
<script>
import { mapState, mapActions, mapGetters } from "vuex";
import Dialog from "./dialog"
export default {
    data() {
        return {
            
            data: "",
            groupItem: "",
            multipleSelection: [],
            boolean: false,
            flag: false,
            inforFlag: false,
            msg: false,
            pageSize: 5,
            pageCount: 1,
            dialogFormVisible: false,
            form: {
                name: '',
                email: '',
                idType: '',
                id: '',
                status: '',
                phone: '',
                code: '',
                organization: ''
            },
            newform: {
                name: '',
                email: '',
                idType: '',
                id: '',
                status: '',
                phone: '',
                code: '',
                groupItemA: "",
                organization:""
            },
            formLabelWidth: '100px'
        }
    },
    mounted() {
        this.getData()
    },
    methods: {
        ...mapActions(["delateInfor_A"]),
        ...mapActions(["compileInfor_A"]),
        ...mapActions(["addInfor_A"]),
        ...mapActions(["getOrg_A"]),
        ...mapActions(["getInfor_A"]),
        ...mapGetters(["getName"]),
        ...mapGetters(["getStaff"]),
        handleCurrentChange(val) {
            if(val.ORGNAME!=null){
                 this.newform.organization = val.ORGNAME
            }
           
        },
        //获取员工信息
        getData() {
            this.inforFlag = true;
            this.getInfor_A(() => {
                this.inforFlag = false;
            })

        },
        //删除员工
        delate() {
            if (this.multipleSelection.length == 0) {
                this.open()
            } else {
                this.delateInfor_A(this.multipleSelection[0].id)
            }
        },
        //添加员工
        addMember() {
            this.dialogFormVisible = false
            this.addInfor_A(this.form)
        },
        //选择员工
        handleSelectionChange(val) {
            this.form = {
                form: {
                    name: '',
                    email: '',
                    idType: '',
                    id: '',
                    status: '',
                    phone: '',
                    code: '',
                    organization: ''
                }
            }
            this.multipleSelection = val;
        },
        //获取员工信息
        getInfors() {
            this.flag = true;
            this.getOrg_A(() => {
                this.flag = false;
            });
        },
        //页码改变
        pageChange(val) {
            this.pageCount = val;
        },
        open() {
            this.$alert('请选择员工信息', '系统提示', {
                confirmButtonText: '确定',
                callback: action => {
                    this.$message({
                        type: 'info',
                        message: `action: ${action}`
                    });
                }
            });
        },
        //修改员工信息
        updateInfor() {
            if (this.multipleSelection.length == 0) {
                this.open()
            } else {
                this.dialogFormVisible = true;
                this.form = {
                    name: this.multipleSelection[0].name,
                    email: this.multipleSelection[0].email,
                    idType: '身份证',
                    id: this.multipleSelection[0].id,
                    status: '在职',
                    phone: this.multipleSelection[0].phone,
                    code: this.multipleSelection[0].code,
                    organization: this.multipleSelection[0].organization
                }
            }

        },
        //查询员工
        check() {
            alert(3)
            console.log(this.newform)
        }
    },
    computed: {
        ...mapState(["infor"]),
        newInfor() {
            let arr = this.infor.slice(this.pageSize * (this.pageCount - 1), this.pageSize * this.pageCount)
            return arr
        }
    },
    component: {
        Dialog
    }
}
</script>
<style>
.pop {
  display: flex;
}
.pop input {
  width: 200px;
  height: 20px;
}
.pop button {
  height: 30px;
}
.el-input__inner {
  height: 30px;
}
.el-dialog {
  width: 700px;
}
.dialog .el-input__inner {
  width: 150px;
  height: 20px;
  border-radius: 0;
}
</style>

