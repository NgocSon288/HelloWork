import './FilterJob.less';

import { Avatar, Button, Card, Col, Input, Pagination, Rate, Row, Select, Tag, Typography } from 'antd';
import React, { useEffect, useState } from 'react';

import { Province } from '../../services/dto/jobTypeDTO/Province';
import { filterJob, getExpertises, getOperations } from '../../services/FilterCandidate';
import provincesFile from './provinces.json';

interface JobResponse {
    id: number,
    name: string,
    position: string,
    finishDate: string,
    wayOfWork: string,
    salaryRange: string,
    expertises: Array<string>,
    urgentLevel: string,
    description: string,
    requirement: string,
    contactEmaik: string,
    state: string
}

const wayOfWorks = [
    "Full time",
    "Part time",
    "Intern",
    "Remote",
    "Tất cả"
]

const salaryRanges = [
    "Thương lượng",
    "Dưới 1 triệu",
    "1 tr – 5 tr",
    "5 tr – 10 tr",
    "10 tr – 20 tr",
    "20 tr – 50 tr",
    "50 tr - 100 tr",
    "Trên 100 tr",
    "Tất cả"
];

const FilterJob = () => {
    const [expertises, setExpertises] = useState<string[]>(["Tất cả"]);
    const [operations, setOperations] = useState<string[]>(["Tất cả"]);
    const [expertise, setExpertise] = useState<string>(expertises[expertises.length - 1]);
    const [operation, setOperation] = useState(operations[operations.length - 1]);
    const [wayOfWork, setWayOfWork] = useState<string>();
    const [name, setName] = useState('');
    const [salaryRange, setSalaryRange] = useState(salaryRanges[salaryRanges.length - 1]);
    const [page, setPage] = useState(1);
    const [provinces, setProvinces] = useState<Province[]>([]);
    const [p, setP] = useState<string[]>([]);
    const [firstLoading, setFirstLoading] = useState(true);
    const [firstLoadOperation, setFirstLoadOperation] = useState(true);
    const [firstLoadExpertise, setFirstLoadExpertise] = useState(true);
    const [province, setProvince] = useState('Tất cả');
    const [jobs, setJobs] = useState<JobResponse[]>([]);

    const temp = [...jobs];
    const startIndex = (page - 1) * 10;
    const maxCandidateIndex = ((page - 1) * 10 + 10 > temp.length) ? temp.length : (page - 1) * 10 + 10;
    const currentCandidate = temp.splice(startIndex, maxCandidateIndex);

    const handleExpertiseChange = (value: string) => {
        setExpertise(expertises[parseInt(value)] || '');
    };

    const handleProvinceChange = (value: string) => {
        setProvince(p[parseInt(value)] || '');
    };

    const handleOperationChange = (value: string) => {
        setOperation(operations[parseInt(value)] || '');
    };

    const handleNameChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setName(event.target.value as string);
    };

    const handleSalaryRangeChange = (value: string) => {
        setSalaryRange(salaryRanges[parseInt(value)] || '');
    };

    const handleWayOfWorkChange = (value: string) => {
        setWayOfWork(wayOfWorks[parseInt(value)] || '');
    };

    const handlePageChange = (page: number) => {
        setPage(page);
    };

    const fetchProvince = async () => {
        const lts = provincesFile;
        setProvinces(lts.LtsItem);
        for (let i = 0; i < lts.LtsItem.length; i++) {
            p.push(lts.LtsItem[i].Title);
            setP(p);
        }
        setProvince(p[p.length - 1]);
    }

    const filter = async (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
        event.stopPropagation();
        event.preventDefault();

        const province_ = province === "Tất cả" ? "" : province;
        const expertise_ = expertise ? expertise?.includes("Tất cả") ? [] : expertise?.split(',') : []
        const operation_ = operation === "Tất cả" ? "" : operation;
        const wayOfWork_ = wayOfWork ? wayOfWork === "Tất cả" ? "" : wayOfWork : "";
        const salaryRange_ = salaryRange ? salaryRange === "Tất cả" ? "" : salaryRange : "";
        const data = await filterJob({
            province: province_,
            expertises: expertise_,
            operation: operation_,
            wayOfWork: wayOfWork_,
            salaryRange: salaryRange_,
            name: name
        });
        setJobs(data);
    }

    const expertiseOption = [];
    for (let i = 0; i < expertises.length; i++) {
        expertiseOption.push(<Select.Option key={i}>{expertises[i]}</Select.Option>);
    }

    const operationOption = [];
    for (let i = 0; i < operations.length; i++) {
        operationOption.push(<Select.Option key={i}>{operations[i]}</Select.Option>);
    }

    const provinceOption = [];
    for (let i = 0; i < p.length; i++) {
        provinceOption.push(<Select.Option key={i}>{p[i]}</Select.Option>);
    }

    const wayOfWorkOption = [];
    for (let i = 0; i < wayOfWorks.length; i++) {
        wayOfWorkOption.push(<Select.Option key={i}>{wayOfWorks[i]}</Select.Option>);
    }

    const salaryRangeOption = [];
    for (let i = 0; i < salaryRanges.length; i++) {
        salaryRangeOption.push(<Select.Option key={i}>{salaryRanges[i]}</Select.Option>);
    }

    const loadData = async () => {
        const data = await filterJob({
            province: '',
            expertises: [],
            operation: "",
            wayOfWork: "",
            salaryRange: "",
            name: ""
        });
        console.log(data);
        setJobs(data);
    }

    const loadExpertises = async () => {
        try {
            const data = await getExpertises();
            data.push("Tất cả");
            setExpertises(data);
        } catch (e) {

        }
    }

    const loadOperations = async () => {
        try {
            const data = await getOperations();
            data.push("Tất cả");
            setOperations(data);
        } catch (e) {

        }
    }

    useEffect(() => {
        if (provinces.length === 0) {
            fetchProvince()
        }
        if (firstLoading) {
            loadData();
            setFirstLoading(false);
        }
        if (firstLoadExpertise) {
            loadExpertises();
            setFirstLoadExpertise(false);
        }
        if (firstLoadOperation) {
            loadOperations();
            setFirstLoadOperation(false);
        }
    }, [provinces, operations, expertises])

    return (
        <div className='root'>
            <Card className='card'>
                <Typography.Title>Tìm kiếm việc làm</Typography.Title>
                <form className='form'>
                    <Row className='verticalBox'>
                        <Col className='horizontalBox'>
                            <Typography.Title level={4}>Vị trí công việc</Typography.Title>
                            <Input
                                size="large"
                                placeholder="Nhập vị trí công việc"
                                defaultValue="Tất cả"
                                onChange={handleNameChange}
                            />
                        </Col>
                        <Col className='horizontalBox'>
                            <Typography.Title level={4}>Lĩnh vực</Typography.Title>
                            <Select
                                showSearch
                                size="large"
                                defaultValue={operation}
                                placeholder="Chọn lĩnh vực"
                                optionFilterProp="children"
                                onChange={handleOperationChange}
                            >
                                {operationOption}
                            </Select>
                        </Col>
                        <Col className='horizontalBox'>
                            <Typography.Title level={4}>Tỉnh thành</Typography.Title>
                            <Select
                                showSearch
                                size="large"
                                defaultValue={province}
                                placeholder="Chọn tỉnh thành"
                                optionFilterProp="children"
                                onChange={handleProvinceChange}
                            >
                                {provinceOption}
                            </Select>
                        </Col>
                    </Row>
                    <Row className='verticalBox'>
                        <Col className='horizontalBox'>
                            <Typography.Title level={4}>Mảng chuyên môn</Typography.Title>
                            <Select
                                mode='multiple'
                                showSearch
                                size="large"
                                defaultValue={expertise}
                                placeholder="Chọn chuyên môn"
                                optionFilterProp="children"
                                onChange={handleExpertiseChange}
                            >
                                {expertiseOption}
                            </Select>
                        </Col>
                        <Col className='horizontalBox'>
                            <Typography.Title level={4}>Mức lương</Typography.Title>
                            <Select
                                showSearch
                                size="large"
                                defaultValue={salaryRange}
                                placeholder="Mức lương"
                                optionFilterProp="children"
                                onChange={handleSalaryRangeChange}
                            >
                                {salaryRangeOption}
                            </Select>
                        </Col>
                        <Col className='horizontalBox'>
                            <Typography.Title level={4}>Chọn Hình thức công việc</Typography.Title>
                            <Select
                                showSearch
                                size="large"
                                defaultValue={wayOfWork}
                                placeholder="Hình thức công việc"
                                optionFilterProp="children"
                                onChange={handleWayOfWorkChange}
                            >
                                {wayOfWorkOption}
                            </Select>
                        </Col>
                        <Col className='columnReverse'>
                            <Button
                                type='primary'
                                size='large'
                                shape='round'
                                onClick={filter}
                            >
                                Lọc
                            </Button>
                        </Col>
                    </Row>
                </form>
                {currentCandidate.length > 0 && currentCandidate.map((e, index) => {
                    const endDay = new Date(e.finishDate);
                    return (
                        <Row key={index} className='candidate'>
                            <Row className='verticalBox'>
                                <Avatar className='avatar' src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/122927445_2661153714198708_8254997726515310957_n.jpg?_nc_cat=106&ccb=2&_nc_sid=09cbfe&_nc_ohc=eofwcjIMIVYAX8GZ1GZ&_nc_ht=scontent-sin6-1.xx&oh=3d6c83bd65167b972dd1965392588f3e&oe=5FE4BA05" />
                                <div>
                                    <Typography.Title level={4}>{e.name}</Typography.Title>
                                    <Typography.Text>{e.position}</Typography.Text>
                                </div>
                                <Rate
                                    disabled
                                    className='rating'
                                    value={4}
                                />
                            </Row>
                            <Row className='candidateInfo'>
                                <Typography.Text>Ngày kết thúc: <b>{endDay.getDate()}/{endDay.getMonth()}/{endDay.getFullYear()}</b></Typography.Text>
                                <Typography.Text>Mức lương: <b>{e.salaryRange}</b></Typography.Text>
                                <Typography.Text>Tỉnh thành: <b>Database của Jobs không lưu thông tin này</b></Typography.Text>
                                <Typography.Text>Hình thức: <b>{e.wayOfWork}</b></Typography.Text>
                                {e.state === "Đang cần gấp" && <Button
                                    type='danger'
                                    size='large'
                                    shape='round'
                                    onClick={filter}
                                >
                                    Đang cần gấp
                            </Button>
                                }
                            </Row>
                            {e.expertises && e.expertises.length > 0 && e.expertises.map((element) => (
                                <Tag className='chip' key={element}>{element}</Tag>
                            ))}
                        </Row>
                    );
                })}
                {(jobs.length > 0) ? (
                    <Pagination
                        className='pagination'
                        total={jobs.length}
                        pageSize={10}
                        current={page}
                        onChange={handlePageChange}
                    />
                ) : (
                        <Typography.Title style={{ textAlign: 'center' }} type="danger">Không tìm thấy ứng viên phù hợp</Typography.Title>
                    )
                }
            </Card>
        </div>
    )
}

export default FilterJob;
