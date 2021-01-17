import './FilterCandidate.less';

import { Avatar, Button, Card, Col, Input, Pagination, Rate, Row, Select, Tag, Typography } from 'antd';
import React, { useEffect, useState } from 'react';

import { Province } from '../../services/dto/jobTypeDTO/Province';
import { filterCandidate, getExpertises, getOperations } from '../../services/FilterCandidate';
import provincesFile from './provinces.json';

interface CandidateResponse {
    name: string,
    avt: string,
    rating: number,
    age: number,
    operation: string,
    expertise: string,
    skills: string[],
    address: string
}

const ages = [
    '16-18',
    '18-20',
    '20-25',
    '25-30',
    'Lớn hơn 30',
    'Tất cả'
];

const sorts = [
    'Điểm đánh giá'
];

const FilterCandidate = () => {
    const [expertises, setExpertises] = useState<string[]>(["Tất cả"]);
    const [operations, setOperations] = useState<string[]>(["Tất cả"]);
    const [expertise, setExpertise] = useState(expertises[expertises.length - 1]);
    const [operation, setOperation] = useState(operations[operations.length - 1]);
    const [skill, setSkill] = useState<string>();
    const [age, setAge] = useState(ages[ages.length - 1]);
    const [sort, setSort] = useState(sorts[sorts.length - 1]);
    const [page, setPage] = useState(1);
    const [provinces, setProvinces] = useState<Province[]>([]);
    const [p, setP] = useState<string[]>([]);
    const [firstLoading, setFirstLoading] = useState(true);
    const [firstLoadOperation, setFirstLoadOperation] = useState(true);
    const [firstLoadExpertise, setFirstLoadExpertise] = useState(true);
    const [province, setProvince] = useState('Tất cả');
    const [candidates, setCandidates] = useState<CandidateResponse[]>([]);

    const temp = [...candidates];
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

    const handleSkillChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setSkill(event.target.value as string);
    };

    const handleAgeChange = (value: string) => {
        setAge(ages[parseInt(value)] || '');
    };

    const handleSortChange = (value: string) => {
        setSort(sorts[parseInt(value)] || '');
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
        let skills_: string[] = [];
        if (skill) {
            skills_ = skill.includes("Tất cả") ? [] : skill.split(",");
        }
        let minAge = 0;
        let maxAge = 0;
        switch (age) {
            case "16-18": {
                minAge = 16;
                maxAge = 18;
                break;
            }
            case "18-20": {
                minAge = 18;
                maxAge = 20;
                break;
            }
            case "20-25": {
                minAge = 20;
                maxAge = 25;
                break;
            }
            case "25-30": {
                minAge = 25;
                maxAge = 30;
                break;
            }
            case "Lớn hơn 30": {
                minAge = 30;
                maxAge = 65;
                break;
            }
            default: {
                minAge = 0;
                maxAge = 100;
                break;
            }
        }
        const province_ = province === "Tất cả" ? "" : province;
        const expertise_ = expertise === "Tất cả" ? "" : expertise;
        const operation_ = operation === "Tất cả" ? "" : operation;
        const data = await filterCandidate({
            minAge: minAge,
            maxAge: maxAge,
            province: province_,
            expertise: expertise_,
            skills: skills_,
            operation: operation_
        });
        setCandidates(data);
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

    const ageOption = [];
    for (let i = 0; i < ages.length; i++) {
        ageOption.push(<Select.Option key={i}>{ages[i]}</Select.Option>);
    }

    const sortOption = [];
    for (let i = 0; i < sorts.length; i++) {
        sortOption.push(<Select.Option key={i}>{sorts[i]}</Select.Option>);
    }

    const loadData = async () => {
        const data = await filterCandidate({
            minAge: 0,
            maxAge: 65,
            province: '',
            expertise: '',
            skills: [],
            operation: ''
        });
        setCandidates(data);
    }

    const loadExpertises = async () => {
        try {
            const data = await getExpertises();
            setExpertises(data);
        } catch(e) {
            
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
                <Typography.Title>Tìm kiếm ứng viên</Typography.Title>
                <form className='form'>
                    <Row className='verticalBox'>
                        <Col className='horizontalBox'>
                            <Typography.Title level={4}>Chuyên môn</Typography.Title>
                            <Select
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
                            <Typography.Title level={4}>Lĩnh vực hoạt động</Typography.Title>
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
                            <Typography.Title level={4}>Độ tuổi</Typography.Title>
                            <Select
                                showSearch
                                size="large"
                                defaultValue={age}
                                placeholder="Chọn độ tuổi"
                                optionFilterProp="children"
                                onChange={handleAgeChange}
                            >
                                {ageOption}
                            </Select>
                        </Col>
                        <Col className='horizontalBox'>
                            <Typography.Title level={4}>Kỹ năng</Typography.Title>
                            <Input
                                size="large"
                                placeholder="Nhập kỹ năng"
                                defaultValue="Tất cả"
                                onChange={handleSkillChange}
                            />
                        </Col>
                        <Col className='horizontalBox'>
                            <Typography.Title level={4}>Sắp xếp</Typography.Title>
                            <Select
                                showSearch
                                size="large"
                                defaultValue={sort}
                                placeholder="Sắp xếp theo"
                                optionFilterProp="children"
                                onChange={handleSortChange}
                            >
                                {expertiseOption}
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
                {currentCandidate.map((e, index) => {
                    return (
                        <Row key={index} className='candidate'>
                            <Row className='verticalBox'>
                                <Avatar className='avatar' src={e.avt} />
                                <div>
                                    <Typography.Title level={4}>{e.name}</Typography.Title>
                                    <Typography.Text>{e.age} tuổi</Typography.Text>
                                </div>
                                <Rate
                                    disabled
                                    className='rating'
                                    value={e.rating}
                                />
                            </Row>
                            <Row className='candidateInfo'>
                                <Typography.Text>Chuyên môn: <b>{e.expertise}</b></Typography.Text>
                                <Typography.Text>Lĩnh vực: <b>{e.operation}</b></Typography.Text>
                                <Typography.Text>Tỉnh thành: <b>{e.address}</b></Typography.Text>
                            </Row>
                            {e.skills.map((e) => (
                                <Tag className='chip' key={e}>{e}</Tag>
                            ))}
                        </Row>
                    );
                })}
                {(candidates.length > 0) ? (
                    <Pagination
                        className='pagination'
                        total={candidates.length}
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

export default FilterCandidate;
