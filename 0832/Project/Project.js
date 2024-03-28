import { icon } from "./Project.svg";

Scratch.translate.setup({
    zh: {
        'Project.Project': '项目',
        'Project.description': '在Gandi中读取项目信息',
        'Project.TotalUsedBlocks': '使用的块总数',
        'Project.NumberOfBlockTypes': '块种类数',
        'Project.NumberOfSegments': '段数',
        'Project.NumberOfCostumes': '造型数',
        'Project.NumberOfSounds': '声音数'
    },
    en: {
        'Project.Project': 'Project',
        'Project.description': 'Read Project infomation in Gandi',
        'Project.TotalUsedBlocks': 'Total Used Blocks',
        'Project.NumberOfBlockTypes': 'Number Of Block Types',
        'Project.NumberOfSegments': 'Number Of Segments',
        'Project.NumberOfCostumes': 'Number Of Costumes',
        'Project.NumberOfSounds': 'Number Of Sounds'
    }
});
let totalUsedBlocks, numberOfBlockTypes, numberOfSegments, numberOfCostumes, numberOfSounds;
const extensionId = 'Project';
class Project {
    constructor(runtime) {
        this.runtime = runtime;
    }
    calculate() {
        const targets = this.runtime.targets;
        const blocksUsed = {}; // Record the number of block types
        let segmentCount = 0; // Record the number of segments
        let costumeCount = 0; // Record the number of costumes
        let soundCount = 0;   // Record the number of sounds

        for (let i = 0; i < targets.length; i++) {
            const target = targets[i];
            if (target.blocks) {
                for (const blockId in target.blocks._blocks) {
                    const block = target.blocks._blocks[blockId];
                    const blockType = block.opcode.split('_')[0]; // Get the block type

                    if (!blocksUsed[blockType]) {
                        blocksUsed[blockType] = 1;
                    } else {
                        blocksUsed[blockType]++;
                    }

                    // Count the number of segments
                    if (block.topLevel && block.parent === null) {
                        segmentCount++;
                    }
                }
            }

            // Count the number of costumes
            if (target.sprite.costumes) {
                costumeCount += target.sprite.costumes.length;
            }

            // Count the number of sounds
            if (target.sprite.sounds) {
                soundCount += target.sprite.sounds.length;
            }
        }

        totalUsedBlocks = targets.reduce((acc, target) => acc + Object.keys(target.blocks._blocks || {}).length, 0);
        numberOfBlockTypes = Object.keys(blocksUsed).length;
        numberOfSegments = segmentCount;
        numberOfCostumes = costumeCount;
        numberOfSounds = soundCount;
    }
    getInfo() {
        return {
            id: extensionId,
            name: Scratch.translate({ id: 'Project.Project', default: 'Project' }),
            blocks: [
                {
                    opcode: 'TotalUsedBlocks',
                    blockType: Scratch.BlockType.REPORTER,
                    disableMonitor: true,
                    text: Scratch.translate({ id: 'Project.TotalUsedBlocks', default: 'Total Used Blocks' })
                },
                {
                    opcode: 'NumberOfBlockTypes',
                    blockType: Scratch.BlockType.REPORTER,
                    disableMonitor: true,
                    text: Scratch.translate({ id: 'Project.NumberOfBlockTypes', default: 'Number of Block Types' })
                },
                {
                    opcode: 'NumberOfSegments',
                    blockType: Scratch.BlockType.REPORTER,
                    disableMonitor: true,
                    text: Scratch.translate({ id: 'Project.NumberOfSegments', default: 'Number of Segments' })
                },
                {
                    opcode: 'NumberOfCostumes',
                    blockType: Scratch.BlockType.REPORTER,
                    disableMonitor: true,
                    text: Scratch.translate({ id: 'Project.NumberOfCostumes', default: 'Number of Costumes' })
                },
                {
                    opcode: 'NumberOfSounds',
                    blockType: Scratch.BlockType.REPORTER,
                    disableMonitor: true,
                    text: Scratch.translate({ id: 'Project.NumberOfSounds', default: 'Number of Sounds' })
                },
            ]
        };
    }
    TotalUsedBlocks() {
        this.calculate();
        return totalUsedBlocks;
    }

    NumberOfBlockTypes() {
        this.calculate();
        return numberOfBlockTypes;
    }

    NumberOfSegments() {
        this.calculate();
        return numberOfSegments;
    }

    NumberOfCostumes() {
        this.calculate();
        return numberOfCostumes;
    }

    NumberOfSounds() {
        this.calculate();
        return numberOfSounds;
    }
}

Scratch.extensions.register(new Project());

const extension = {
    Extension: Project,
    info: {
        name: `${extensionId}.Project.Project`,
        description: `${extensionId}.Project.description`,
        extensionId,
        iconURL: icon,
        featured: true,
        disabled: false,
        collaboratorList: [
            {
                collaborator: "0832",
                collaboratorURL: "https://github.com/0832k12",
            },
        ],
    },
    l10n: {
        "zh-cn": {
            [`${extensionId}.Project.Project`]: "项目",
            [`${extensionId}.Project.description`]: "在Gandi中读取项目信息",
        },
        en: {
            [`${extensionId}.Project.Project`]: "Project",
            [`${extensionId}.Project.description`]: "Read Project infomation in Gandi",
        },
    },
};
window.tempExt = extension;
